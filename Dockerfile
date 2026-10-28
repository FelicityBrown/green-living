FROM python:3.6.9-slim-buster

# Debian buster is end-of-life and its packages have moved to archive.debian.org.
RUN sed -i 's|deb.debian.org/debian|archive.debian.org/debian|; s|security.debian.org/debian-security|archive.debian.org/debian-security|; /buster-updates/d' /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y \
        nginx-light \
        supervisor \
        && \
        apt-get clean && \
            rm -rf /var/lib/apt/lists/* \
                   /tmp/* \
                   /var/tmp/*

WORKDIR /srv

COPY requirements.txt /srv/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY requirements.txt /srv/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY project /srv/project
COPY system /srv/system
COPY manage.py /srv/manage.py
COPY .git /srv/.git

ENV PYTHONPATH /srv

RUN mkdir /srv/media
RUN python manage.py collectstatic --noinput --link

# COPY . /usr/share/nginx/html

CMD ./system/run.sh

EXPOSE 80
