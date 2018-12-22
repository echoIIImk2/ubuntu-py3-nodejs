# -*- coding: utf-8 -*-


import requests
from pyquery import PyQuery as pq
import json
#import filetype
import os, sys
#import time
import random
import subprocess
import zipfile

import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
print(sys.stdout.encoding)


proxies = {
  "https": "http://192.168.5.130:1080",
}


cookies ={
    "YJEBOOKBVIEWER": "v%3D1%26c%3Dy7u2ACpNOD_E_VuQb6IlYCcVw_uDNbPpBD5l78KJGOPk3duCBYOC65A-",
    "_n": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEiLCJ0eXAiOiJKV1QifQ.eyJndWlkIjoiNERNUEFPWk8zVEtQS1dEM0hESDI2SFpJRDQiLCJpc3MiOiJodHRwczpcL1wvbG9naW4ueWFob28uY28uanAiLCJ0aCI6InY0Si1KcWpMMXRlVWl5akR6dmlxUmciLCJpYXQiOjE1NDU0NDE3MzksImV4cCI6MTU0Nzg2MDkzOSwianRpIjoiY2JlZDI5ODUtYjY1Ni00Mzg5LTlkMDctYTNiM2ZmM2MwMTI0IiwibGN4Ijp7ImFhdCI6MTUzOTAwODUzNiwiYW1yIjpbInB3ZCJdfSwidmN4Ijp7ImFhdCI6MTU0NTQ0MTczOSwiYW1yIjpbInB3ZCJdfSwiaGlzdCI6WyJwd2QiXX0.OskGrWcMFWyCrcL3LERuGWVKa9kZCH2y9AdCZcoDhkoGTgkGw-SPZxW0VHUu6nR_8bVLgQK_WB00IPux0eZ_1XjPhBn0eYb8IayYgDUV5gnGmuQ-lepY4cogRakZzFNhbNnF4BU2VsFOYt78BtacuVMbqglQObooQFPhLofx2Ks0SG_kJ-ugGihBftjG5i_rDEmPKK13eEHZFJIbeu7uS-dIed8WPTNAHd5VArdXrgvo_exagM46E-ZtCeodHQEPUOo3eaeMhZNaROvMiSuJQbFipI-lSaOxVUY7rqPLP6naY6OztflSpuhx37Gw6ofcQxPkZaqDYNo7oXWgQxOk_g",
    "B": "f4gn5epe1r4de&b=4&d=fn84USxpYF3B_IBkgm0tD9zbQ8phSNliV0TPifur&s=iu&i=DDAKBo42Ry95",
    "F": "a=m1FVzjAMvSMgzujs6fdZu7_rs7vxqW6wkksEtMuswiuGtGgS9SPE.SBko.PPoeetEM1ECHs-&b=LnnV",
    "SSL": "v=1&s=rS.PBJxdCT0yaFUJpwAyZQo4ZBlef9FQ8AuRGOpD7hGc3UZz3pQE84DSg5zYsZkiN_C.9EghQvY8QUfac3K3OA--&kv=0",
    "T": "z=LHZHcBLvnQcBywHeSrVueH7Njc2NAY0TjMwNTdONjI-&sk=DAAg5mLZ8RDecc&ks=EAArZ0cGVdegafuM570V1j3jw--~F&kt=EAAv6NXxEzrHAcRKoiO_u_DYw--~E&ku=FAAMEYCIQCqOexxhoLCbeiyfDB2wvgqDyRHOv0qL9927X359Nr_iQIhAMTful5DkyBtfxUL0ClJ6iOmPHLdQM3H3fAZvvJ1t5Di~A&d=dGlwAXlSdno3RAFhAVFBRQFnATRETVBBT1pPM1RLUEtXRDNIREgyNkhaSUQ0AXNsAU1UQXhNd0V6T1RRM01qQTVNVFUtAXNjAWJvb2tzdG9yZQF6egFMSFpIY0JBMko-",
    "TLS": "v=1.2&r=1",
    "Y": "v=1&n=d3o2f02v5gcbr&l=427e888_qqq/o&p=m2gvvjp012000000&ig=00qfo&r=u7&lg=ja-JP&intl=jp",
    "YLS": "v=2&p=1&n=1",
}

agent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Mobile Safari/537.36'

headers = {
    "HOST": "viewer-bookstore.yahoo.co.jp",
    "Referer": "https://viewer-bookstore.yahoo.co.jp",
    "User-Agent": agent
}

crumb = 'dD1JdGZpYkImc2s9amlWT0FoSjdxMEIxV0Y0YWd6SEtxWHVPSm5RLQ=='
k= 'pdFDI1CTFzGVr8VusQphmgC0ttZnhoyi'
dmytime='1536147819543'


##设置session和cookies
session = requests.session()
session.headers = headers
requests.utils.add_dict_to_cookiejar(session.cookies, cookies)


def downbook(cid):
    ##拼bibGetCntntInfo.php
    url = 'https://viewer-bookstore.yahoo.co.jp/bibGetCntntInfo.php?u0=1&.crumb=' + crumb + '&cid=' + cid + '&k=' + k + '&dmytime=' + dmytime
    print(url)
    response = session.get(url)
    js = json.loads(response.text)
    if js["result"] == -204:
        response = session.get(url, proxies=proxies)
        js = json.loads(response.text)
    if js["result"] == 1:
        p = js["items"][0]["p"].replace('trial','commercial')
        Authors = js["items"][0]["Authors"][0]["Name"]
        if (len(js["items"][0]["Authors"]) == 2 ):
            Authors = js["items"][0]["Authors"][0]["Name"] + '×' + js["items"][0]["Authors"][1]["Name"]
        if (len(js["items"][0]["Authors"]) == 3 ):
            Authors = js["items"][0]["Authors"][0]["Name"] + '×' + js["items"][0]["Authors"][1]["Name"] + '×' + js["items"][0]["Authors"][2]["Name"]
        if (len(js["items"][0]["Authors"]) > 3 ):
            Authors = js["items"][0]["Authors"][0]["Name"] + '×' + js["items"][0]["Authors"][1]["Name"] + '×' + js["items"][0]["Authors"][2]["Name"] + ' etc.'             
        Title = js["items"][0]["Title"]
        Publisher = js["items"][0]["Publisher"]
        Publisher = Publisher.replace('KADOKAWA / ','')
        zipname = '(一般コミック Digital) [' + Authors + '] ' + Title + '(' + Publisher
        print(p)
        with open('./data/'+cid+'.txt', 'w') as f:
            f.write(url+'\n\n'+response.text+'\n\n')
        subprocess.call(["nodejs", "downpics.js", cid, p, zipname])
		#time.sleep(10)
        with open('./zipname.txt', 'r') as f:
            zipname = f.read()
        print (zipname)
        zipname = zipname.replace('/','∕').replace('\\','＼').replace(': ','：').replace(':','：').replace('?','？').replace('"','\'\'').replace('<','＜').replace('>','＞').replace('|','∣').replace('*','＊')		
        webp_zip = zipfile.ZipFile(zipname+'.zip', 'w')
        for folder, subfolders, files in os.walk('./tmp/'):
            for file in files:
                if file.endswith('.webp'):
                    webp_zip.write(os.path.join(folder, file), os.path.relpath(os.path.join(folder,file), './tmp/'),compress_type = zipfile.ZIP_DEFLATED)
                    os.remove(os.path.join(folder, file))
        webp_zip.close()
        with open('downloaded.log', 'a') as f:
            f.write(cid+'\t'+zipname+'\n')
        #time.sleep(random.randint(0,2))
    else:
        print('No book or cannot be downloaded!')
        with open('nothing.log', 'a') as f:
            f.write(cid+'\n') 



def main():
    for cid in range(130000,140000):
        downbook(str(cid))
    #cid = '988712'
    #downbook(cid)
        

if __name__ == '__main__':
    main()