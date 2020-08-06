from django.shortcuts import render, redirect
from django.http import HttpResponse, Http404, JsonResponse
import random
from django.utils.http import is_safe_url
from django.conf import settings


ALLOWED_HOSTS = settings.ALLOWED_HOSTS


def home_view(request):
    return render(request, "pages/feed.html")


def tweets_list_view(request):
    return render(request, "tweets/list.html")


def tweets_detail_view(request, tweet_id):
    return render(request, "tweets/detail.html", context={"tweet_id": tweet_id})
