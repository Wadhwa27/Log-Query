# Log-Query
use elastic tool for ingseting and query selector 
For this various utilities have to install which include :
npm install winston
npm install @elastic/ecs-winston-format
npm install got
After instlling npm packages; deploymnet in elastic cloud be there
by sign in with the free trial of my username and password with deploment section name Log-Query
After this connect elastic with webserver.js and webrequests.js file with elastic server for the log ingestion 
now run both the js file using
node webserver.js
node webrequests.js
after running localhost:3000 is ready 
and all the current data will be shown in json file 
now to show the deployment connect elastic cloud with filebeat and then kibana
filebeat is a platfoem where to port the log data into Elastic search service
for downloading filebeat; docker is also installed to display all the fields and some extension and setup is done for this 
After this connect filebeat-* file to kibana 
and show all the fields that shows all the log include timestamp, level and id 
for this we can add raw data and it shows in the dashboard how the data is connected and displayed over it 
![image](https://github.com/Wadhwa27/Log-Query/assets/99739636/d179fc96-24ea-4719-ab14-7efeb52109e9)
![image](https://github.com/Wadhwa27/Log-Query/assets/99739636/2bfbb343-1815-4bc8-bbe7-9dd19610809c)
![image](https://github.com/Wadhwa27/Log-Query/assets/99739636/ee004c60-01e7-425e-aba9-f50662aaccb8)
