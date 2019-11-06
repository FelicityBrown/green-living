from django.conf import settings
from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from django.shortcuts import render


def submit(request):
    if request.method == 'POST':
        context = {
            'name': request.POST.get('name'),
            'url': request.POST.get('url'),
        }

        send_mail(
            'New Green Living Submission',
            'Here is the message.',
            settings.EMAIL_HOST_USER,
            [settings.EMAIL_SUBMISSION_RECIPIENT],
            fail_silently=False,
        )

        return HttpResponseRedirect('/submit/confirmation/')

    else:
        return render(request, 'submit.html')

