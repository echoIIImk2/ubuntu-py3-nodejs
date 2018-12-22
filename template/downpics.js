const { Image, createCanvas }  = require('/node_modules/canvas');
const sharp = require('/node_modules/sharp');
const request = require('/node_modules/superagent');
require('/node_modules/superagent-proxy')(request);
const cheerio = require('/node_modules/cheerio');
const binaryParser = require('/node_modules/superagent-binary-parser');
const async = require('/node_modules/async');
const fs = require('fs');



const descramble = require('./descramble.js');

var proxy = process.env.https_proxy || 'http://192.168.5.130:1080';

const cookie = 'YJEBOOKBVIEWER=v%3D1%26c%3Dy7u2ACpNOD_E_VuQb6IlYCcVw_uDNbPpBD5l78KJGOPk3duCBYOC65A-;_n=eyJhbGciOiJSUzI1NiIsImtpZCI6IjEiLCJ0eXAiOiJKV1QifQ.eyJndWlkIjoiNERNUEFPWk8zVEtQS1dEM0hESDI2SFpJRDQiLCJpc3MiOiJodHRwczpcL1wvbG9naW4ueWFob28uY28uanAiLCJ0aCI6InY0Si1KcWpMMXRlVWl5akR6dmlxUmciLCJpYXQiOjE1NDU0NDE3MzksImV4cCI6MTU0Nzg2MDkzOSwianRpIjoiY2JlZDI5ODUtYjY1Ni00Mzg5LTlkMDctYTNiM2ZmM2MwMTI0IiwibGN4Ijp7ImFhdCI6MTUzOTAwODUzNiwiYW1yIjpbInB3ZCJdfSwidmN4Ijp7ImFhdCI6MTU0NTQ0MTczOSwiYW1yIjpbInB3ZCJdfSwiaGlzdCI6WyJwd2QiXX0.OskGrWcMFWyCrcL3LERuGWVKa9kZCH2y9AdCZcoDhkoGTgkGw-SPZxW0VHUu6nR_8bVLgQK_WB00IPux0eZ_1XjPhBn0eYb8IayYgDUV5gnGmuQ-lepY4cogRakZzFNhbNnF4BU2VsFOYt78BtacuVMbqglQObooQFPhLofx2Ks0SG_kJ-ugGihBftjG5i_rDEmPKK13eEHZFJIbeu7uS-dIed8WPTNAHd5VArdXrgvo_exagM46E-ZtCeodHQEPUOo3eaeMhZNaROvMiSuJQbFipI-lSaOxVUY7rqPLP6naY6OztflSpuhx37Gw6ofcQxPkZaqDYNo7oXWgQxOk_g;B=f4gn5epe1r4de&b=4&d=fn84USxpYF3B_IBkgm0tD9zbQ8phSNliV0TPifur&s=iu&i=DDAKBo42Ry95;F=a=m1FVzjAMvSMgzujs6fdZu7_rs7vxqW6wkksEtMuswiuGtGgS9SPE.SBko.PPoeetEM1ECHs-&b=LnnV;SSL=v=1&s=rS.PBJxdCT0yaFUJpwAyZQo4ZBlef9FQ8AuRGOpD7hGc3UZz3pQE84DSg5zYsZkiN_C.9EghQvY8QUfac3K3OA--&kv=0;T=z=LHZHcBLvnQcBywHeSrVueH7Njc2NAY0TjMwNTdONjI-&sk=DAAg5mLZ8RDecc&ks=EAArZ0cGVdegafuM570V1j3jw--~F&kt=EAAv6NXxEzrHAcRKoiO_u_DYw--~E&ku=FAAMEYCIQCqOexxhoLCbeiyfDB2wvgqDyRHOv0qL9927X359Nr_iQIhAMTful5DkyBtfxUL0ClJ6iOmPHLdQM3H3fAZvvJ1t5Di~A&d=dGlwAXlSdno3RAFhAVFBRQFnATRETVBBT1pPM1RLUEtXRDNIREgyNkhaSUQ0AXNsAU1UQXhNd0V6T1RRM01qQTVNVFUtAXNjAWJvb2tzdG9yZQF6egFMSFpIY0JBMko-;TLS=v=1.2&r=1;Y=v=1&n=d3o2f02v5gcbr&l=427e888_qqq/o&p=m2gvvjp012000000&ig=00qfo&r=u7&lg=ja-JP&intl=jp;YLS=v=2&p=1&n=1;';

const agent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Mobile Safari/537.36';



const crumb = 'dD1JdGZpYkImc2s9amlWT0FoSjdxMEIxV0Y0YWd6SEtxWHVPSm5RLQ==';
const k= 'pdFDI1CTFzGVr8VusQphmgC0ttZnhoyi';
const dmytime='1536147819543';

function delay(second) {
    return new Promise((resolve) => {
        setTimeout(resolve, second * Math.round(Math.random()*1000));
    });
}
function delay2(second) {
    return new Promise((resolve) => {
        setTimeout(resolve, second * 1000);
    });
}



async function downpic(downlink,filename,encodeName){
	await request.get(downlink).set("Cookie",cookie).set("User-Agent",agent)
			.parse(binaryParser)
			.buffer()
			.end(function(err, resp) {
				//console.info("downloading");
				
				var canvas = createCanvas(width,height);
				//var Image = Canvas.Image;
				const ctx = canvas.getContext('2d');
				img = new Image();
				img.src = resp.body;     //resp.body is the buffer
				canvas.width = img.width;
				canvas.height = img.height;
				
			
				img.ZKV1AZ = encodeName;
				
				
				var s = new descramble.t();
				var i = { id:""
					,orgheight:img.height
					,orgwidth:img.width
					,pagespread:2
					,src:"pages/"+encodeName
					,usemap:""			
				};
				var xx = s.getImageDescrambleCoords(i, img.width, img.height)
				var yy=descramble.getPreloadImages(xx,s);

				var ze = Math.ceil(img.height/3);
				var a = yy[0]["transfers"][0]["coords"];//a3E.a3f(img.width, img.height, 64, 64, n);
				for (var k = 0; k < a.length; k++) {
						ctx.drawImage(img, a[k].xsrc, a[k].ysrc, a[k].width , a[k].height , a[k].xdest, a[k].ydest, a[k].width, a[k].height)
				}
				var a = yy[1]["transfers"][0]["coords"];//a3E.a3f(img.width, img.height, 64, 64, n);
				for (var k = 0; k < a.length; k++) {
						ctx.drawImage(img, a[k].xsrc, a[k].ysrc, a[k].width , a[k].height , a[k].xdest, a[k].ydest+ze, a[k].width, a[k].height)
				}
				var a = yy[2]["transfers"][0]["coords"];//a3E.a3f(img.width, img.height, 64, 64, n);
				for (var k = 0; k < a.length; k++) {
						ctx.drawImage(img, a[k].xsrc, a[k].ysrc, a[k].width , a[k].height , a[k].xdest, a[k].ydest+ze*2, a[k].width, a[k].height)
				}		

				sharp(canvas.toBuffer()).toFormat(sharp.format.webp).toFile('./tmp/'+filename);
				
			})
}



arg = process.argv;
cid = arg[2];
p = arg[3];
zipname = arg[4];

var url2 = 'https://viewer-bookstore.yahoo.co.jp/sbc/sbcGetCntnt.php?callback=Z630XI&cid=' + cid + '&p=' + p + '&suid=admin%23sm&u0=1&.crumb='+ crumb + '&dmytime=' + dmytime;
console.info(url2);


function request2(cid,url2,p,zipname){
	request.get(url2).set("Cookie",cookie).set("User-Agent",agent).end(async function (err, res) {
		if(err){
			console.error(err);
		}
		await delay(1);
		var json2 = JSON.parse(res.text.replace('Z630XI(','').replace('})','}'));
		fs.appendFile('./data/'+cid+'.txt', url2+'\n\n'+res.text+'\n\n','utf8', function (err) {
		   if(err) {
				console.error(err);
			} else {
				console.log(cid+' data写入成功');
			}
		});		
		html = json2.ttx.replace('<t-pb>','</t-img>');
		let $ = cheerio.load(html);
        title = $('title').text();
        title = title.replace('/','∕').replace('\\','＼').replace(': ','：').replace(':','：').replace('?','？').replace('"','\'\'').replace('<','＜').replace('>','＞').replace('|','∣').replace('*','＊');		
		await console.info(title);

		
		let filenames = [];
		let downlinks = [];
		let encodeNames = [];		
		
        $('t-case').find('t-img').each(function(){
            var id = $(this).attr('id')
            //await console.info(id);
            var src = $(this).attr('src')
            //await console.info(src);
			var encodeName = src.replace('pages/','');
            width = $(this).attr('orgwidth');
            height = $(this).attr('orgheight');
            var downlink = 'https://viewer-bookstore.yahoo.co.jp/sbc/sbcGetImg.php?cid=' + cid + '&src=' + src + '&p=' + p + '&h=' + height + '&q=0&u0=1&.crumb=' + crumb;
            //await console.info(downlink);
            filename = title + '_' + id + '_H' + height + '.webp';
            //await console.info(filename);
			//await downpic(downlink,filename,encodeName);
			filenames.push(filename);
			downlinks.push(downlink);
			encodeNames.push(encodeName);
		});
		async function downpics(i){
			console.info(filenames[i]);
			console.info(downlinks[i]);
			console.info(encodeNames[i]);
			await delay(1);
			await downpic(downlinks[i],filenames[i],encodeNames[i]);
			i=i+1;
			if(i < filenames.length) {await downpics(i);}
		}
		
		//await delay(10);
		zipname = zipname + ' 縦' + height + ' 計' + filenames.length + '頁)';
		fs.writeFile('./zipname.txt', zipname, function (err) {
		   if(err) {
				console.error(err);
			} else {
				console.log('zipname写入成功');
			}
		});
		await downpics(0);
		//await console.info(zipname);
		//await zipArchive(zipname);
		//await delay(10);
		//await findRemoveSync('./', {extensions: ['.webp']})	
		

	});
}

request2(cid,url2,p,zipname);	






