FROM nginx:1.23.1

RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -subj "/C=TW/ST=Taiwan/L=Taipei/O=Individual/CN=www.individual.com" \
    -keyout /etc/ssl/private/nginx-selfsigned.key \
    -out /etc/ssl/certs/nginx-selfsigned.crt

COPY nginx.conf etc/nginx/conf.d/default.conf
