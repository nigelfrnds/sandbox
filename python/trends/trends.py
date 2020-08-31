import pandas as pd                        
from pytrends.request import TrendReq
pytrend = TrendReq()

pytrend.build_payload(kw_list=["NASDAQ:TSLA"])

searches_trending_today = pytrend.trending_searches(pn="united_states")
search_interest_ot = pytrend.interest_over_time()

# df.head(10)

print(searches_trending_today.tail(10))
print(search_interest_ot.tail(10))
