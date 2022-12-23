const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const games = require('./test.json')
const scorers = require('./matches.json')

let  channels  = []
let  channelsImgs  = []
let imgs = []
let urls = []
// for(let i =1;i < 13 ;i++){
//  cloudinary.v2.uploader.upload(`./imgs/${i}.png`,
//   { public_id: "olympic_flag" }, 
// async function(error, result) { 
  
//   channels.push(result)
  
//    });
//     // channels2.push(i)
// }
// setTimeout(()=> {
  
// channels.map(i => 
  
//     channelsImgs.push(i)
   
  
  
//   )
//  imgs =  channelsImgs.filter(item => item != undefined)
// //  const games = [
// //     {channleImage:gameName:'dota2',country: 'egypt'}
// //  ]

// },8000)
// setTimeout(()=>{
//  imgs.map(i =>urls.push(i.secure_url))
//  console.log(urls)
// },20000)
const app= express()


app.use(helmet())

app.use(bodyParser.json())

app.use(cors())

app.use(morgan('combined'));

app.get('/games',(req,res)=>{

    res.send(games)
})

app.get('/scores',(req,res)=>{

    res.send(scorers)
})

const imgsArr =[
  'https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/08/featured.png?auto=format&q=60&w=2060&h=1158.75&fit=crop&crop=faces',
  'https://cdn.mos.cms.futurecdn.net/m5ADpuAdKTpadnUWmsCrHJ.jpg',
  'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/106916085.jpeg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces',
  'https://assets.turbologo.com/blog/en/2021/06/14075433/famous-logos-958x575.png',
  'https://i.insider.com/5d7a92da2e22af0af07706ab?width=1000&format=jpeg&auto=webp',
  'https://visme.co/blog/wp-content/uploads/2016/05/logo-colors.jpg',
  'https://www.tailorbrands.com/wp-content/uploads/2021/06/Brand-marks-1.jpg',
  'https://ichef.bbci.co.uk/images/ic/960x960/p08ck79f.png',
  'https://justcreative.com/wp-content/uploads/2019/07/black-white-logos.jpg',
  'https://1000logos.net/wp-content/uploads/2021/11/Top-60-Most-Famous-Logos-With-a-Circle-500x313.png',
  'https://static.wixstatic.com/media/84b06e_2e6b4d0f613e4354b58b1eabf225ee9e~mv2.jpg/v1/fill/w_640,h_612,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84b06e_2e6b4d0f613e4354b58b1eabf225ee9e~mv2.jpg',
  'https://cdn.shopify.com/s/files/1/2472/0536/articles/blog-famous-logo-brandsX_1024x1024.png?v=1572023390',
  'https://brandculture.com//wp-content/uploads/2012/02/Logos.gif',
  'https://blog.logomyway.com/wp-content/uploads/2020/07/top-brand-logos.jpg',
  'https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0',
  'https://img.freepik.com/free-vector/logotype-set_53876-120502.jpg?w=2000',
  'https://blog.btrax.com/en/wp-content/blogs.dir/2/files/2022/01/brand-logos-min.jpg',
  'https://assets.entrepreneur.com/content/3x2/2000/20160210172912-branding-logos-companies-businesses-identity.jpeg',
  'https://yesimadesigner.com/wp-content/uploads/2019/10/color-logos-famous-logo-designs.png?x99157&x99157&x99157&x99157&x78792&x86947&x86947&x86947',
  'https://i.insider.com/50b64bc569beddeb13000008?width=750&format=jpeg&auto=webp',
  'https://www.logomaker.com/wp-content/uploads/2018/01/FLS-Blog-Black-Logos_Hero.jpg',
  'https://dealdesign.com/wp-content/uploads/2017/02/Logo-Design-Deal-Design.jpg',
  'http://1000logos.net/wp-content/uploads/2016/09/brand-logos.jpg',
  'https://www.rd.com/wp-content/uploads/2021/07/RD-Hidden-Messages-In-Company-Logos-FT.jpg?fit=700,467',
  'https://www.solopress.com/blog/wp-content/uploads/2013/11/50-best-logos-ever-made.jpg',
  'https://www.logodesign.net/images/home-page-logo-03.png',
  'https://designchamp.files.wordpress.com/2012/02/logos.jpg',
  'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg',
  'https://www.storm12.co.uk/images/blog/logos-that-will-make-you-laugh-5a2575491ee15.jpg',
  'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i_dO0G3epcUc/v0/-1x-1.jpg',
  'https://fc05.deviantart.net/fs19/f/2007/241/4/a/WP_Logos_of_Australia_by_Borrarcher.png',
  'https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg',
  'https://cdn.mos.cms.futurecdn.net/aFDcBGs6f97jJ3SPb9wV2V-320-80.jpg',
  'https://www.logodesignlove.com/wp-content/uploads/2021/04/woody-pirtle-logos-01-1200x637.jpg',
  'https://img.freepik.com/free-vector/social-media-icons-vector-set-with-facebook-instagram-twitter-tiktok-youtube-logos_53876-126271.jpg?w=2000',
  'https://static.demilked.com/wp-content/uploads/2020/06/artist-recreates-famous-logos-de2s-fb49.png',
  'https://www.logodesignlove.com/wp-content/uploads/2013/05/well-known-logos-01-1.jpg',
  'https://media.wired.com/photos/5a55ada3e726d45a6fd18492/master/pass/Untitled-1.jpg',
  'https://img.freepik.com/free-vector/set-company-logo-design-ideas-vector_53876-64063.jpg?w=2000',
  'https://thelogocompany.net/wp-content/uploads/2020/12/Color_Emotion_Guide221.png',
  'https://play-lh.googleusercontent.com/7b_oyw-NHedfrAh6y_BEomTA3hiQJkdTtMrD0ElW6C_B_cK0YnUHkMSzZF_nyX2wwPw=w600-h300-pc0xffffff-pd',
  'https://static-cse.canva.com/blob/568357/LogoColorWheel1.jpg',
  'https://www.tailorbrands.com/wp-content/uploads/2021/06/Mascots-1.jpeg',
  'https://images.crowdspring.com/blog/wp-content/uploads/2016/01/27132357/overused-swooshy-people-aug2015.png',
  'https://bestlifeonline.com/wp-content/uploads/sites/3/2018/09/tostitos.jpg?quality=82&strip=all',
  'http://thecitizensite.vocalwire.com/NewsImages/858759Logos.jpg',
  'https://cdn.mos.cms.futurecdn.net/Z7F4B5TTnNMCQwp4njasiV-320-80.jpg',
  'https://www.coreldraw.com/static/cdgs/landing_pages/seo/logo-design/04-colors.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Logos.svg/1200px-Logos.svg.png',
  'https://cdn.cnn.com/cnnnext/dam/assets/200326121014-20200326-social-distancing-corporate-logos-split-gfx-super-tease.jpg',
  'https://wl-brightside.cf.tsp.li/resize/1200x630/jpg/91d/63f/44486f5de79c81f99f044e8615.jpg',
  'https://mymodernmet.com/wp/wp-content/uploads/2017/10/target-logo-from-memory.jpg',
  'https://visme.co/blog/wp-content/uploads/2020/12/1-2.jpg',
  'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/image5-3.png?auto=format&q=60&fit=max&w=930',
  'https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609435108429-02SFAT1AEVWK5ANKI0D0/Top+101+Logos+in+the+world.jpg?format=500w',
  'https://corporate.target.com/_media/TargetCorp/Press/B-roll%20and%20Press%20Materials/Logos/Target_Bullseye-Logo_Red.jpg?preset=640w',
  'https://static.boredpanda.com/blog/wp-content/uploads/2020/06/Artist-shows-alternative-versions-of-famous-logos-in-different-styles-5ed4ac823b564__880.jpg',
  'https://cdn3.vectorstock.com/i/1000x1000/70/42/popular-companies-logos-vector-39237042.jpg',
  'https://www.tailorbrands.com/wp-content/uploads/2021/06/Header-Types-of-logos.jpg',
  'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/61b774776eb68f1346e6a9f1_famous-logos-tell-us-about-the-evolution-of-design_BlogHero.jpg',
  'https://sevenpie.com/wp-content/uploads/2019/01/1200-x-628-8.jpg',
  'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=5881874931',
  'https://i.insider.com/50b652dbeab8eada19000006?width=750&format=jpeg&auto=webp',
  'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/840babff8c7009ac167142cb459dfe8d.svg',
  'https://1000logos.net/wp-content/uploads/2021/11/Top-60-Most-Famous-Logos-With-a-Circle-tumb.png',
  'https://static.boredpanda.com/blog/wp-content/uploads/2016/05/famous-logo-evolution-history-old-new-fb-png__700.jpg',
  'https://static-cse.canva.com/blob/650636/createlogos1.jpg',
  'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/02/OLYMPIC-LOGOS.jpg?auto=format&q=60&w=1860&h=1860&fit=crop&crop=faces',
  'https://i.ytimg.com/vi/TH-jqZ4xueI/maxresdefault.jpg',
  'https://www.logomaker.com/wp-content/uploads/2018/01/FLS-Blog-WHITE-Logos_Hero-800x358.jpg',
  'https://cdn.cnn.com/cnnnext/dam/assets/220211103156-06-logo-beginnings-taschen-exlarge-169.jpg',
  'https://www.web4.com.ar/wp-content/uploads/2020/07/banner-logos.jpg',
  'https://s3.amazonaws.com/cdn.designcrowd.com/blog/6-Tips-for-an-Exceptional-Logo-Design/header-6-Tips-for-an-Exceptional-Logo-Design.jpg',
  'https://www.tailorbrands.com/wp-content/uploads/2021/06/Artboard-2-copy-3-100.jpg',
  'https://images.cars.com/cldstatic/wp-content/uploads/brand-comparison-new-logo-old-logo-1.png',
  'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/gtdsomrfke5tckpj1jtr/nike-logos-lead?fimg-ssr-default',
  'https://yt3.ggpht.com/vnQYDSGtKFu7LenJX864ylaHIDJZlQm33FU7KQnRfKW4slSo77nV0JwkmEXYhUFwtUxMwq5W=s900-c-k-c0x00ffffff-no-rj',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/NASA%2BIBM%2BBIPM_logos.svg/800px-NASA%2BIBM%2BBIPM_logos.svg.png',
  'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png',
  'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Shell_logo.svg-e1659037248878.png?auto=format&q=60&fit=max&w=930',
  'https://www.adobe.com/express/create/media_1fd4a6f2e688c9c269ec460ca1095e89953e33c28.png?width=750&format=png&optimize=medium',
  'https://neal.fun/share-cards/logos-from-memory.png',
  'https://hbr.org/resources/images/article_assets/2019/09/Logos-SecondTake1-2.jpg',
  'https://penji.co/wp-content/uploads/2021/03/starbucks-logo.jpg',
  'https://cdn.dribbble.com/users/60266/screenshots/6221772/playstation_logo_redesign_1.gif',
  'https://assets.laliga.com/assets/public/logospage/laliga-h-16-9.jpg',
  'https://repository-images.githubusercontent.com/6583352/f54c1c00-8a98-11eb-85ff-5bb28b12dec1',
  'https://www.business2community.com/wp-content/uploads/2020/09/logos_circle.png',
  'https://thumbs.dreamstime.com/b/vector-logos-popular-clothing-brands-such-as-chanel-louis-vuitton-prada-gucci-fendi-hugo-boss-calvin-klein-nike-reebok-wind-253882867.jpg',
  'https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium',
  'https://venngage-wordpress.s3.amazonaws.com/uploads/2021/12/section-3-logos.png',
  'http://www.logobook.com/wp-content/uploads/2016/10/Superband_logo.svg',
  'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930',
  'https://corporate.target.com/_media/TargetCorp/Press/B-roll%20and%20Press%20Materials/Logos/Target_Bullseye-Logo_Black_transparent.png?preset=640w',
  'https://techcrunch.com/wp-content/uploads/2020/10/Google-Workspace-Icons-bad.png',
  'https://logogeek.uk/wp-content/uploads/2017/05/Logos-apple-and-nike.jpg',
  'https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png',
  'https://raw.githubusercontent.com/maciejhirsz/logos/master/logos.svg?sanitize=true',
  'https://149627654.v2.pressablecdn.com/wp-content/uploads/2018/12/nba-chart-11-1024x683.png',
  'https://www.logodesign.net/logo/aggressive-cock-incorporated-with-circle-5313ld.png?size=2'
]

// let arr = []

// let re = []
// let games = ["fantasy","action","combat","moba",'shooter','warrior','strategy']
// // for(let i in uu){
// // re.push(uu[i])
// // }
// for(let o in names){
//   re.push(names[o])
// }
// console.log(re)
// for(let i =0;i< imgsArr.length;i++){

// arr.push({"_id":{"$oid":`6364a709b24bbd0b273a3dcd${i}`},"id":`${i}`,"Channel_name":`${re[i].name}`,"channle_image":`${imgsArr[i]}`,"games_tags":[...new Set([games[Math.floor(Math.random() * games.length)],games[Math.floor(Math.random() * games.length)],games[Math.floor(Math.random() * games.length)]])],"live_now":"false","number_streamed_games":{"$numberInt":`${Math.floor(Math.random() * i) * 1000}`}})
// // {  "_id": { "$oid": "6364a709b24bbd0b273a3dcd0" },
// //     "id": "0",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/08/featured.png?auto=format&q=60&w=2060&h=1158.75&fit=crop&crop=faces",
// //     "games_tags": [ "action", "fantasy", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd1" },
// //     "id": "1",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://cdn.mos.cms.futurecdn.net/m5ADpuAdKTpadnUWmsCrHJ.jpg",
// //     "games_tags": [ "moba", "combat", "fantasy" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd2" },
// //     "id": "2",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/106916085.jpeg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces",
// //     "games_tags": [ "shooter", "action", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd3" },
// //     "id": "3",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://assets.turbologo.com/blog/en/2021/06/14075433/famous-logos-958x575.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd4" },
// //     "id": "4",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://i.insider.com/5d7a92da2e22af0af07706ab?width=1000&format=jpeg&auto=webp",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd5" },
// //     "id": "5",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://visme.co/blog/wp-content/uploads/2016/05/logo-colors.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd6" },
// //     "id": "6",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.tailorbrands.com/wp-content/uploads/2021/06/Brand-marks-1.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd7" },
// //     "id": "7",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://ichef.bbci.co.uk/images/ic/960x960/p08ck79f.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd8" },
// //     "id": "8",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://justcreative.com/wp-content/uploads/2019/07/black-white-logos.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd9" },
// //     "id": "9",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://1000logos.net/wp-content/uploads/2021/11/Top-60-Most-Famous-Logos-With-a-Circle-500x313.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd10" },
// //     "id": "10",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://static.wixstatic.com/media/84b06e_2e6b4d0f613e4354b58b1eabf225ee9e~mv2.jpg/v1/fill/w_640,h_612,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84b06e_2e6b4d0f613e4354b58b1eabf225ee9e~mv2.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd11" },
// //     "id": "11",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://cdn.shopify.com/s/files/1/2472/0536/articles/blog-famous-logo-brandsX_1024x1024.png?v=1572023390",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd12" },
// //     "id": "12",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://brandculture.com//wp-content/uploads/2012/02/Logos.gif",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd13" },
// //     "id": "13",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://blog.logomyway.com/wp-content/uploads/2020/07/top-brand-logos.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd14" },
// //     "id": "14",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd15" },
// //     "id": "15",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://img.freepik.com/free-vector/logotype-set_53876-120502.jpg?w=2000",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd16" },
// //     "id": "16",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://blog.btrax.com/en/wp-content/blogs.dir/2/files/2022/01/brand-logos-min.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd17" },
// //     "id": "17",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://assets.entrepreneur.com/content/3x2/2000/20160210172912-branding-logos-companies-businesses-identity.jpeg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd18" },
// //     "id": "18",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://yesimadesigner.com/wp-content/uploads/2019/10/color-logos-famous-logo-designs.png?x99157&x99157&x99157&x99157&x78792&x86947&x86947&x86947",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd19" },
// //     "id": "19",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://i.insider.com/50b64bc569beddeb13000008?width=750&format=jpeg&auto=webp",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd20" },
// //     "id": "20",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.logomaker.com/wp-content/uploads/2018/01/FLS-Blog-Black-Logos_Hero.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd21" },
// //     "id": "21",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://dealdesign.com/wp-content/uploads/2017/02/Logo-Design-Deal-Design.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd22" },
// //     "id": "22",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "http://1000logos.net/wp-content/uploads/2016/09/brand-logos.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd23" },
// //     "id": "23",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.rd.com/wp-content/uploads/2021/07/RD-Hidden-Messages-In-Company-Logos-FT.jpg?fit=700,467",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd24" },
// //     "id": "24",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.solopress.com/blog/wp-content/uploads/2013/11/50-best-logos-ever-made.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd25" },
// //     "id": "25",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.logodesign.net/images/home-page-logo-03.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd26" },
// //     "id": "26",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://designchamp.files.wordpress.com/2012/02/logos.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd27" },
// //     "id": "27",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd28" },
// //     "id": "28",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.storm12.co.uk/images/blog/logos-that-will-make-you-laugh-5a2575491ee15.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd29" },
// //     "id": "29",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i_dO0G3epcUc/v0/-1x-1.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd30" },
// //     "id": "30",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://fc05.deviantart.net/fs19/f/2007/241/4/a/WP_Logos_of_Australia_by_Borrarcher.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd31" },
// //     "id": "31",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd32" },
// //     "id": "32",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://cdn.mos.cms.futurecdn.net/aFDcBGs6f97jJ3SPb9wV2V-320-80.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd33" },
// //     "id": "33",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.logodesignlove.com/wp-content/uploads/2021/04/woody-pirtle-logos-01-1200x637.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd34" },
// //     "id": "34",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://img.freepik.com/free-vector/social-media-icons-vector-set-with-facebook-instagram-twitter-tiktok-youtube-logos_53876-126271.jpg?w=2000",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd35" },
// //     "id": "35",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://static.demilked.com/wp-content/uploads/2020/06/artist-recreates-famous-logos-de2s-fb49.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd36" },
// //     "id": "36",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.logodesignlove.com/wp-content/uploads/2013/05/well-known-logos-01-1.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd37" },
// //     "id": "37",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://media.wired.com/photos/5a55ada3e726d45a6fd18492/master/pass/Untitled-1.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd38" },
// //     "id": "38",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://img.freepik.com/free-vector/set-company-logo-design-ideas-vector_53876-64063.jpg?w=2000",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd39" },
// //     "id": "39",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://thelogocompany.net/wp-content/uploads/2020/12/Color_Emotion_Guide221.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd40" },
// //     "id": "40",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://play-lh.googleusercontent.com/7b_oyw-NHedfrAh6y_BEomTA3hiQJkdTtMrD0ElW6C_B_cK0YnUHkMSzZF_nyX2wwPw=w600-h300-pc0xffffff-pd",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd41" },
// //     "id": "41",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://static-cse.canva.com/blob/568357/LogoColorWheel1.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd42" },
// //     "id": "42",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.tailorbrands.com/wp-content/uploads/2021/06/Mascots-1.jpeg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd43" },
// //     "id": "43",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://images.crowdspring.com/blog/wp-content/uploads/2016/01/27132357/overused-swooshy-people-aug2015.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd44" },
// //     "id": "44",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://bestlifeonline.com/wp-content/uploads/sites/3/2018/09/tostitos.jpg?quality=82&strip=all",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd45" },
// //     "id": "45",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "http://thecitizensite.vocalwire.com/NewsImages/858759Logos.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd46" },
// //     "id": "46",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://cdn.mos.cms.futurecdn.net/Z7F4B5TTnNMCQwp4njasiV-320-80.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd47" },
// //     "id": "47",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.coreldraw.com/static/cdgs/landing_pages/seo/logo-design/04-colors.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd48" },
// //     "id": "48",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Logos.svg/1200px-Logos.svg.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd49" },
// //     "id": "49",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://cdn.cnn.com/cnnnext/dam/assets/200326121014-20200326-social-distancing-corporate-logos-split-gfx-super-tease.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd50" },
// //     "id": "50",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://wl-brightside.cf.tsp.li/resize/1200x630/jpg/91d/63f/44486f5de79c81f99f044e8615.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd51" },
// //     "id": "51",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://mymodernmet.com/wp/wp-content/uploads/2017/10/target-logo-from-memory.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd52" },
// //     "id": "52",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://visme.co/blog/wp-content/uploads/2020/12/1-2.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd53" },
// //     "id": "53",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/image5-3.png?auto=format&q=60&fit=max&w=930",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd54" },
// //     "id": "54",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609435108429-02SFAT1AEVWK5ANKI0D0/Top+101+Logos+in+the+world.jpg?format=500w",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd55" },
// //     "id": "55",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://corporate.target.com/_media/TargetCorp/Press/B-roll%20and%20Press%20Materials/Logos/Target_Bullseye-Logo_Red.jpg?preset=640w",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd56" },
// //     "id": "56",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://static.boredpanda.com/blog/wp-content/uploads/2020/06/Artist-shows-alternative-versions-of-famous-logos-in-different-styles-5ed4ac823b564__880.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd57" },
// //     "id": "57",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://cdn3.vectorstock.com/i/1000x1000/70/42/popular-companies-logos-vector-39237042.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd58" },
// //     "id": "58",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.tailorbrands.com/wp-content/uploads/2021/06/Header-Types-of-logos.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd59" },
// //     "id": "59",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/61b774776eb68f1346e6a9f1_famous-logos-tell-us-about-the-evolution-of-design_BlogHero.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd60" },
// //     "id": "60",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://sevenpie.com/wp-content/uploads/2019/01/1200-x-628-8.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd61" },
// //     "id": "61",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media'_id'=5881874931",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd62" },
// //     "id": "62",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://i.insider.com/50b652dbeab8eada19000006?width=750&format=jpeg&auto=webp",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd63" },
// //     "id": "63",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/840babff8c7009ac167142cb459dfe8d.svg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd64" },
// //     "id": "64",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://1000logos.net/wp-content/uploads/2021/11/Top-60-Most-Famous-Logos-With-a-Circle-tumb.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd65" },
// //     "id": "65",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://static.boredpanda.com/blog/wp-content/uploads/2016/05/famous-logo-evolution-history-old-new-fb-png__700.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd66" },
// //     "id": "66",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://static-cse.canva.com/blob/650636/createlogos1.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd67" },
// //     "id": "67",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/02/OLYMPIC-LOGOS.jpg?auto=format&q=60&w=1860&h=1860&fit=crop&crop=faces",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd68" },
// //     "id": "68",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://i.ytimg.com/vi/TH-jqZ4xueI/maxresdefault.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd69" },
// //     "id": "69",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.logomaker.com/wp-content/uploads/2018/01/FLS-Blog-WHITE-Logos_Hero-800x358.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd70" },
// //     "id": "70",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://cdn.cnn.com/cnnnext/dam/assets/220211103156-06-logo-beginnings-taschen-exlarge-169.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd71" },
// //     "id": "71",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.web4.com.ar/wp-content/uploads/2020/07/banner-logos.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd72" },
// //     "id": "72",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://s3.amazonaws.com/cdn.designcrowd.com/blog/6-Tips-for-an-Exceptional-Logo-Design/header-6-Tips-for-an-Exceptional-Logo-Design.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd73" },
// //     "id": "73",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.tailorbrands.com/wp-content/uploads/2021/06/Artboard-2-copy-3-100.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd74" },
// //     "id": "74",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://images.cars.com/cldstatic/wp-content/uploads/brand-comparison-new-logo-old-logo-1.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd75" },
// //     "id": "75",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/gtdsomrfke5tckpj1jtr/nike-logos-lead?fimg-ssr-default",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd76" },
// //     "id": "76",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://yt3.ggpht.com/vnQYDSGtKFu7LenJX864ylaHIDJZlQm33FU7KQnRfKW4slSo77nV0JwkmEXYhUFwtUxMwq5W=s900-c-k-c0x00ffffff-no-rj",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd77" },
// //     "id": "77",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/NASA%2BIBM%2BBIPM_logos.svg/800px-NASA%2BIBM%2BBIPM_logos.svg.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd78" },
// //     "id": "78",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd79" },
// //     "id": "79",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Shell_logo.svg-e1659037248878.png?auto=format&q=60&fit=max&w=930",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd80" },
// //     "id": "80",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.adobe.com/express/create/media_1fd4a6f2e688c9c269ec460ca1095e89953e33c28.png?width=750&format=png&optimize=medium",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd81" },
// //     "id": "81",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://neal.fun/share-cards/logos-from-memory.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd82" },
// //     "id": "82",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://hbr.org/resources/images/article_assets/2019/09/Logos-SecondTake1-2.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd83" },
// //     "id": "83",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://penji.co/wp-content/uploads/2021/03/starbucks-logo.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd84" },
// //     "id": "84",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://cdn.dribbble.com/users/60266/screenshots/6221772/playstation_logo_redesign_1.gif",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd85" },
// //     "id": "85",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://assets.laliga.com/assets/public/logospage/laliga-h-16-9.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd86" },
// //     "id": "86",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://repository-images.githubusercontent.com/6583352/f54c1c00-8a98-11eb-85ff-5bb28b12dec1",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd87" },
// //     "id": "87",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.business2community.com/wp-content/uploads/2020/09/logos_circle.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd88" },
// //     "id": "88",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://thumbs.dreamstime.com/b/vector-logos-popular-clothing-brands-such-as-chanel-louis-vuitton-prada-gucci-fendi-hugo-boss-calvin-klein-nike-reebok-wind-253882867.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd89" },
// //     "id": "89",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd90" },
// //     "id": "90",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://venngage-wordpress.s3.amazonaws.com/uploads/2021/12/section-3-logos.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd91" },
// //     "id": "91",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "http://www.logobook.com/wp-content/uploads/2016/10/Superband_logo.svg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd92" },
// //     "id": "92",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd93" },
// //     "id": "93",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://corporate.target.com/_media/TargetCorp/Press/B-roll%20and%20Press%20Materials/Logos/Target_Bullseye-Logo_Black_transparent.png?preset=640w",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd94" },
// //     "id": "94",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://techcrunch.com/wp-content/uploads/2020/10/Google-Workspace-Icons-bad.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd95" },
// //     "id": "95",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://logogeek.uk/wp-content/uploads/2017/05/Logos-apple-and-nike.jpg",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd96" },
// //     "id": "96",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd97" },
// //     "id": "97",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://raw.githubusercontent.com/maciejhirsz/logos/master/logos.svg?sanitize=true",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd98" },
// //     "id": "98",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://149627654.v2.pressablecdn.com/wp-content/uploads/2018/12/nba-chart-11-1024x683.png",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   },
// //   {
// //     "_id": { "$oid": "6364a709b24bbd0b273a3dcd99" },
// //     "id": "99",
// //     "Channel_name":`${uu[i].name}`,
// //     "channle_image": "https://www.logodesign.net/logo/aggressive-cock-incorporated-with-circle-5313ld.png?size=2",
// //     "games_tags": [ "action", "combat", "moba" ],
// //     "live_now": "false",
// //     "number_streamed_games": { "$numberInt":`${Math.random() * i}` }
// //   }
// }
// console.log(JSON.stringify(arr))
// console.log(arr)
app.listen(3000,()=>{
    console.log('running on 3000')
})



