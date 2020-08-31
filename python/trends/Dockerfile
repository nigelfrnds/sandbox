FROM python:3

WORKDIR /usr/src/app

RUN pip install pytrends

COPY . .

CMD [ "python", "./trends.py" ]