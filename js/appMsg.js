var appMsg = [];
var appMsglang="en";
var currentDate = new Date();

appMsg.get = function (key) {

    var msgInstance = appMsg.getInstance();
    if (!msgInstance) {
        return key;
    }
    var v = msgInstance[key];
    return v || key;
};

appMsg.createCookie =function (name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";

            var fixedName = '<%= Request["formName"] %>';
            name = fixedName + name;

            document.cookie = name + "=" + value + expires + "; path=/";
        };

appMsg.readCookie =function (name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        };
        
appMsg.getInstance = function () {
    //var lang = 'en';
   /* if (SAT.getParam('lang')) {
        lang = SAT.getParam('lang');
    }
    else if (SAT.pageUser && SAT.pageUser.lang) {
        lang = SAT.pageUser.lang;
    }
    else{*/
        lang = appMsglang;
    //}
    return appMsg[lang];
};

appMsg.setLang = function(language){
    appMsglang = language;
    appMsg.render();
};

appMsg.render = function () {

    $('span[bim],option[bim],title[bim],a[bim],textarea[placeholder]').each(function () {
      
        var bim = $(this).attr('bim');
        $(this).html(appMsg.get(bim));
    });
    $('div[bimTitle]').each(function () {
     
        var bim = $(this).attr('bimTitle');
        $(this).attr('title', appMsg.get(bim));
    });
};



appMsg['en'] = {};
var en = appMsg['en'];
en['About'] = 'ABOUT';
en['Portfolio'] = 'PORTFOLIO';
en['Services'] = 'SERVICES';
en['Contact'] = 'CONTACT';
en['Blog'] = 'BLOG';
en['Name'] = 'Hi, I\'m Kenneth.';
en['introtext'] = 'Web Design &  App Developer passionate about creating clean interfaces for web, mobile, and desktop applications.';
en['Language']='Language';
en['Projectform'] ='Project form';
en['seemywork']='See my work';
en['Aboutme'] = 'About Me';
en['introduce']='I am based in Singapore where work in Asia. I have been working professionally as a web designer for 7 years. I specialise in creating marketing/information websites that market your products or services successfully online. Websites which generating more leads or sales, and raise awareness for your brand.';
en['Portfolio']='Portfolio';
en['PortfolioIntro']='Here is a selection of work I have done';
en['Services']='My Services';
en['SrvWebDesign']='From the simplest to the most complicated, I design beautiful websites that are engaging for your target audience, easy to use and add value to your business through enquiries, conversions and sales';
en['SrvRespDesign']='Mobile is a huge driver of website traffic and responsive design is now a necessity rather than an option. ‘Mobile first’ design ensures that your website looks perfect across all devices, helping you differentiate yourself from the competition.';
en['SrvAppDesign']='Got a great idea for an iphone or Android app? The best apps have the cleanest of interfaces and to achieve simplicity requires strategy, UX and creativity. Come and say hello and I will design an app that is a joy to use.';
en['SendMeMessage']='Send me a message :';
en['Coorperation']='Work with me :';
en['CoorperationContent']='If you have a project you would like to work on with me, please fill out my project form. Please be as specific as possible - the more specific you are, the easier it will be for me to help you.';
en['ProjectForm'] ='Introduction about your company (background, services / products):<br>I am looking to (here is a short description of what is involved in this project:): The business goals for this project: (What are you looking to achieve?):';



appMsg['cn'] = {};
var cn = appMsg['cn'];
cn['About'] = '关于我';
cn['Contact'] = '联络我';
cn['Blog'] = 'BLOG';
cn['Name'] = '您好! 我是Kenneth';
cn['introtext'] = 'Web Design &  App 开发者热衷于简洁富有创造力的网站、移动式应用程序及应用程序';
cn['Language']='語言';
cn['seemywork']='请看我的作品集';
cn['Aboutme'] = '关于我';
cn['Projectform'] ='项目合作调查表';
cn['introduce']='驻点在新加坡但是服务至整个亚洲，拥有超过七年的网页设计经验。擅长营销、入口及个人网站，并提高人们对你的品牌。';
cn['Portfolio']='作品集';
cn['PortfolioIntro']='这些是一部分我的作品';
cn['Services']='服 务';
cn['SrvWebDesign']='我设计漂亮的网站从最简单到最复杂的，可以帮助你的客户找到你，提供详细联系方式和展示你的工作。';
cn['SrvRespDesign']='响应式网页设计网站是必须的，而不是一个选项。 “移动第一”的设计保证了您的网站看起来完美的，帮助您从竞争中脱颖而出。';
cn['SrvAppDesign']='APP设计用户接口时除了美观之外，更重要的是操作流程顺畅、符合用户的操作经验，使用者对APP的体验和感受将决定一支APP的成败。';
cn['SendMeMessage']='我的电子邮箱 :';
cn['Coorperation']='合作项目 :';
cn['CoorperationContent']='如果你有想和我一起合作的案子，请填写项目表格。请尽可能具体与详细，这样就越容易将是我来帮助你';
cn['ProjectForm'] ='请介绍一下贵公司（背景，服务/产品） ：您希望我能提供什么(一个简短的描述)：这个项目的目标是： （ 你想要实现什么功能或网页）:';


appMsg['tw'] = {};
var tw = appMsg['tw'];
tw['About'] = '關於我';
tw['Contact'] = '聯絡我';
tw['Blog'] = 'BLOG';
tw['Name'] = '您好! 我是Kenneth';
tw['introtext'] = 'Web Design &  App 開發者熱衷於簡潔富有創造力的網站、移動式應用程式及應用程式';
tw['Language']='語言';
tw['seemywork']='請看我的作品集';
tw['Aboutme'] = '关于我';
tw['Projectform'] ='專案合作調查表';
tw['introduce']='我駐點在新加坡但是服務至整個亞洲，擁有超過七年的網頁設計經驗。擅長​​行銷、入口及個人網站，並提高人們對你的品牌。';
tw['Portfolio']='作品集';
tw['PortfolioIntro']='這些是一部分我的作品';
tw['Services']='服 務';
tw['SrvWebDesign']='從最簡單到最複雜的，我設計漂亮的網站，正在從事您的目標受眾，易於使用，並通過查詢，轉換和銷售增值業務。';
tw['SrvRespDesign']='響應式網頁設計網站是必須的，而不是一個選項。 “移動第一”的設計保證了您的網站看起來完美的所有設備，幫助您從競爭中脫穎而出。';
tw['SrvAppDesign']='APP設計使用者介面時除了美觀之外，更重要的是操作流程順暢、符合使用者的操作經驗，使用者對APP的體驗和感受將決定一支APP的成敗。';
tw['SendMeMessage']='我的電子郵箱 :';
tw['Coorperation']='合作項目 :';
tw['CoorperationContent']='如果你有想和我一起合作的案子，請填寫專案表格。請盡可能具體與詳細，這樣就越容易將是我來幫助你。';
tw['ProjectForm'] ='請介紹一下貴公司（背景，服務/產品） ：您希望我能提供什麼(一個簡短的描述)：這個項目的目標是： （ 你想要實現什麼功能或網頁）:';