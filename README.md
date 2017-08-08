#### Nodejs base project utilizing express, consolidate, swig and nstore that works on Kapsi.fi members for quick project startup.

### SETUP

1. Rename _sample.htaccess_ to _.htaccess_. 
2. Change the port number in it to match your nodejs server port.(default 306543)
3. Move the _.htaccess_ file under your public_html folder or other publicly accessible folder. 
4. The _.htaccess_ file now routes requests done to that location to your nodejs server.

5. Create data folder for nStore 
~~~
   mkdir data 
   //on project root
~~~
6. start the server: 
~~~   
   nodejs/bin/node src/server.js
~~~


