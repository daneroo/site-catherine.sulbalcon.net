# Migration of catherine.sulbalcon.net from Axial servers
On 2018-07-05 I migrated all the data on axial servers
which hosted multiple sites. 

Publied at http://daniel-lauzon.com/site-catherine.sulbalcon.net/

Using CNAME record on imetrical.com:
```
CNAME catherine daneroo.github.io

$ dig www.imetrical.com

;; ANSWER SECTION:
www.imetrical.com.	899	IN	CNAME	daneroo.github.io.
daneroo.github.io.	3599	IN	CNAME	sni.github.map.fastly.net.
sni.github.map.fastly.net. 3599	IN	A	185.199.108.153
sni.github.map.fastly.net. 3599	IN	A	185.199.109.153
sni.github.map.fastly.net. 3599	IN	A	185.199.110.153
sni.github.map.fastly.net. 3599	IN	A	185.199.111.153
```
