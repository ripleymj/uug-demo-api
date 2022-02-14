FROM public.ecr.aws/ubuntu/ubuntu:hirsute
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get -y --no-install-recommends install nodejs npm && apt-get clean
COPY app/ /uug-demo-api/
WORKDIR /uug-demo-api
RUN npm install
