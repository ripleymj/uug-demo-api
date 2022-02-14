FROM public.ecr.aws/ubuntu/ubuntu:hirsute
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get -y -qq --no-install-recommends install nodejs npm curl && apt-get clean
COPY api/ /uug-demo-api/
WORKDIR /uug-demo-api
RUN npm install
EXPOSE 80
ENTRYPOINT ["npm", "start"]
