# add the necessary instructions
# to create a Docker container image
# for your Go API gateway server
FROM alpine
RUN apk add --no-cache ca-certificates
COPY summary /summary
EXPOSE 80
ENTRYPOINT ["/summary"] 