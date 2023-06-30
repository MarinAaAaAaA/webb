# from datetime import timedelta, time, datetime

# from django.core.mail import mail_admins
# from django.utils import timezone
# from django.utils.timezone import make_aware

# from mailingList.models import MailingList


# def send_report():
#     today = timezone.now()
#     tomorrow = today + timedelta(1)
#     today_start = make_aware(datetime.combine(today, time()))
#     today_end = make_aware(datetime.combine(tomorrow, time()))

#     todayList = MailingList.objects.filter(confirmed_date__range=(today_start, today_end))

#     if todayList:
#         message = ""

#         for item in todayList:
#             message += f"{item.email} \n"

#         subject = (
#             f"New subscriptions from {today_start.strftime('%Y-%m-%d')} "
#             f"to {today_end.strftime('%Y-%m-%d')}"
#         )

#         mail_admins(subject=subject, message=message, html_message=None)