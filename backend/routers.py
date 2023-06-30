from rest_framework import routers
from course.views import CourseViewSet
from mailingList.views import MailingListViewSet
from shedule.views import SheduleViewSet
# from members.views import MembersViewSet
from visitLog.views import VisitViewSet

router = routers.DefaultRouter()
router.register(r'course', CourseViewSet, basename='course')
router.register(r'mailingList', MailingListViewSet, basename='mailingList')
router.register(r'shedule', SheduleViewSet, basename='shedule')
# router.register(r'members', MembersViewSet, basename='members')
router.register(r'visitLog', VisitViewSet, basename='visitLog')
