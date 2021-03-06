# Pull base image.
FROM ubuntu:18.04

# Install.
RUN \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y build-essential && \
  apt-get install -y curl vim wget screen locales && \
  apt-get install -y python3 python3-pip && \
  apt-get install -y libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev && \
  python3 -m pip install requests pyquery && \
  curl -sL https://deb.nodesource.com/setup_11.x | bash - && \
  apt-get install -y nodejs && \
  npm install sharp superagent superagent-proxy superagent-binary-parser cheerio canvas async  && \
  # Clean
  apt-get purge -y --auto-remove build-essential && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* /tmp/*
  
# Set the locale
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8


# Define default command.
CMD ["bash"]
