from django.conf import settings
from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from django.shortcuts import render


def add_listing(request):
    if request.method == 'POST':
        context = {
            'company_name': request.POST.get('Company_name'),
            'zerowaste': request.POST.get('zerowaste')
        }

        # send_mail(
        #     'New Green Living Submission',
        #     'Here is the message.',
        #     settings.EMAIL_HOST_USER,
        #     [settings.EMAIL_SUBMISSION_RECIPIENT],
        #     fail_silently=False,
        # )

        # return HttpResponseRedirect('/addlisting/confirmation/')
        return render(request, 'add_listing_test.html', context)

    else:
        return render(request, 'add_listing.html')
