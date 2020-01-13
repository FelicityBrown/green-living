from django.conf import settings
from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from django.shortcuts import render


def add_listing(request):
    if request.method == 'POST':
        context = {}

        email_body = f'''Hello,

Company name: {request.POST.get('company_name')}

Filters: {request.POST.getlist('filterselected')}

Suggested new filter: {request.POST.get('other_suggested_tag')}

Town/city (if applicable): {request.POST.get('town_city')}

Address and postcode (if known): {request.POST.get('address')}

Website (if applicable): {request.POST.get('website')}

Social media links (if applicable)
    Facebook: {request.POST.get('facebook')}
    Instagram: {request.POST.get('instagram')}
    Twitter: {request.POST.get('twitter')}

Description (optional): {request.POST.get('description')}

Your email address (optional): {request.POST.get('useremail')}
        '''

        send_mail(
            'New Green Living Add Listing Request - ' + request.POST.get('company_name'),
            email_body,
            settings.EMAIL_HOST_USER,
            [settings.EMAIL_SUBMISSION_RECIPIENT],
            fail_silently=False,
        )

        return HttpResponseRedirect('/?thankyou=1')

    else:
        return render(request, 'add_listing.html')
