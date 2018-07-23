FROM nginx
COPY nginx-default.conf.template /etc/nginx/conf.d/default.conf.template
ADD src/ /usr/share/nginx/html/
COPY docker-entrypoint.sh /
RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
