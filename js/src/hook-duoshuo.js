function hookTemplate(){var o=DUOSHUO.templates.post;DUOSHUO.templates.post=function(a,e){var s=o(a,e),n=a.post.agent,r=a.post.author.user_id,i="";return r&&r==CONFIG.duoshuo.userId&&(i='<span class="duoshuo-ua-admin">'+CONFIG.duoshuo.author+"</span>"),n&&/^Mozilla/.test(n)&&(s=s.replace(/<\/div><p>/,i+getAgentInfo(n)+"</div><p>")),s}}function getAgentInfo(o){$.ua.set(o);var a="Unknown",e=$.ua,s=function(){var o=window.navigator.userAgent,a=null!==o.match(/iPad/i),e=new RegExp(["iphone","android","phone","mobile","wap","netfront","x11","java","opera mobi","opera mini","ucweb","windows ce","symbian","symbianos","series","webos","sony","blackberry","dopod","nokia","samsung","palmsource","xda","pieplus","meizu","midp","cldc","motorola","foma","docomo","up.browser","up.link","blazer","helio","hosin","huawei","novarra","coolpad","webos","techfaith","palmsource","alcatel","amoi","ktouch","nexian","ericsson","philips","sagem","wellcom","bunjalloo","maui","smartphone","iemobile","spice","bird","zte-","longcos","pantech","gionee","portalmmm","jig browser","hiptop","benq","haier","^lct","320x320","240x320","176x220"].join("|"),"i");return!a&&o.match(e)}()?"<br><br>":'<span class="duoshuo-ua-separator"></span>',n=e.os.name||a,r=e.os.version||a,i=e.browser.name||a,t=e.browser.version||a,u={chrome:"chrome",chromium:"chrome",firefox:"firefox",opera:"opera",safari:"safari",ie:"internet-explorer",wechat:"wechat",qq:"qq",unknown:"globe"},p={android:"android",linux:"linux",windows:"windows",ios:"apple","mac os":"apple",unknown:"desktop"}[n.toLowerCase()],l=u[function(){var o=i.toLowerCase();return o.match(/WeChat/i)?"wechat":o.match(/QQBrowser/i)?"qq":o}()];return s+'<span class="duoshuo-ua-platform duoshuo-ua-platform-'+n.toLowerCase()+'"><i class="fa fa-'+p+'"></i>'+n+" "+r+"</span>"+s+'<span class="duoshuo-ua-browser duoshuo-ua-browser-'+i.toLowerCase()+'"><i class="fa fa-'+l+'"></i>'+i+" "+t+"</span>"}"undefined"!=typeof DUOSHUO?hookTemplate():$("#duoshuo-script")[0].onload=hookTemplate;