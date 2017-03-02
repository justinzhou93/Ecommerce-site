'use strict'; // eslint-disable-line semi

// const seedUsers = () => db.Promise.map([
//   {name: 'so many', email: 'god@example.com', password: '1234'},
//   {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
// ], user => db.model('users').create(user));

// db.didSync
//   .then(() => db.sync({force: true}))
//   .then(seedUsers)
//   .then(users => console.log(`Seeded ${users.length} users OK`))
//   .catch(error => console.error(error))
//   .finally(() => db.close())

const Promise = require('bluebird');
const db = require('APP/db');
const OAuth = require('./models/oauth');

var data = {
    users: [{"id":1,"firstName":"Richard","lastName":"Kim","email":"rkim0@indiatimes.com","isAdmin":true,"password_digest":"IXHDR2rtpkl"},
        {"id":2,"firstName":"Jane","lastName":"Wagner","email":"jwagner1@phpbb.com","isAdmin":true,"password_digest":"oMPXEZ8U"},
        {"id":3,"firstName":"Roy","lastName":"Hamilton","email":"rhamilton2@stanford.edu","isAdmin":true,"password_digest":"ESaZBu0jE2Fn"},
        {"id":4,"firstName":"Lillian","lastName":"Russell","email":"lrussell3@earthlink.net","isAdmin":true,"password_digest":"VcTdxQ"},
        {"id":5,"firstName":"Wayne","lastName":"Torres","email":"wtorres4@spiegel.de","isAdmin":true,"password_digest":"WobRoV"},
        {"id":6,"firstName":"Jacqueline","lastName":"Lewis","email":"jlewis5@gov.uk","isAdmin":false,"password_digest":"XmGHLuvceO"},
        {"id":7,"firstName":"Heather","lastName":"Meyer","email":"hmeyer6@skyrock.com","isAdmin":true,"password_digest":"ENiIN1v"},
        {"id":8,"firstName":"Jean","lastName":"Baker","email":"jbaker7@ocn.ne.jp","isAdmin":false,"password_digest":"b4xvdNx"},
        {"id":9,"firstName":"Irene","lastName":"Morrison","email":"imorrison8@fc2.com","isAdmin":true,"password_digest":"goRXsvEOVF"},
        {"id":10,"firstName":"Michelle","lastName":"Myers","email":"mmyers9@ovh.net","isAdmin":false,"password_digest":"k4hc8G2OAc3"},
        {"id":11,"firstName":"Wanda","lastName":"Mills","email":"wmillsa@illinois.edu","isAdmin":true,"password_digest":"ZQOGL21nEkA"},
        {"id":12,"firstName":"Jane","lastName":"Ray","email":"jrayb@kickstarter.com","isAdmin":true,"password_digest":"I1dOGKPMD"},
        {"id":13,"firstName":"Shirley","lastName":"Butler","email":"sbutlerc@opensource.org","isAdmin":false,"password_digest":"hTplV2Xrp"},
        {"id":14,"firstName":"Linda","lastName":"Cole","email":"lcoled@t-online.de","isAdmin":false,"password_digest":"b2llFE"},
        {"id":15,"firstName":"Harold","lastName":"Phillips","email":"hphillipse@ted.com","isAdmin":true,"password_digest":"IMEslwWmZDzi"},
        {"id":16,"firstName":"Craig","lastName":"Parker","email":"cparkerf@biglobe.ne.jp","isAdmin":true,"password_digest":"ejarFFLElBul"},
        {"id":17,"firstName":"Barbara","lastName":"Willis","email":"bwillisg@sciencedirect.com","isAdmin":true,"password_digest":"oFPmex"},
        {"id":18,"firstName":"Elizabeth","lastName":"Hill","email":"ehillh@taobao.com","isAdmin":true,"password_digest":"3Cj5cG6"},
        {"id":19,"firstName":"Ernest","lastName":"James","email":"ejamesi@usatoday.com","isAdmin":false,"password_digest":"vpCkYyUb"},
        {"id":20,"firstName":"Lawrence","lastName":"Green","email":"lgreenj@ycombinator.com","isAdmin":true,"password_digest":"ib1LHP"},
        {"id":21,"firstName":"Joe","lastName":"Morales","email":"jmoralesk@redcross.org","isAdmin":true,"password_digest":"36Sd2O2"},
        {"id":22,"firstName":"Patricia","lastName":"Russell","email":"prusselll@lycos.com","isAdmin":false,"password_digest":"ganns5ABd"},
        {"id":23,"firstName":"Juan","lastName":"Cook","email":"jcookm@desdev.cn","isAdmin":true,"password_digest":"0SdKSjkqC7v5"},
        {"id":24,"firstName":"Cheryl","lastName":"Morrison","email":"cmorrisonn@msu.edu","isAdmin":false,"password_digest":"jsrRPO1OYj87"},
        {"id":25,"firstName":"Brian","lastName":"Richardson","email":"brichardsono@kickstarter.com","isAdmin":false,"password_digest":"aNuwpa0km5R"}],
    shipping_addresses: [{"id":1,"address1":"40628 Old Shore Terrace","address2":"159 Springview Pass","city":"Jamaica","state":"New York","zipCode":"11431"},
        {"id":2,"address1":"762 Colorado Avenue","address2":"322 Prentice Hill","city":"Salt Lake City","state":"Utah","zipCode":"84125"},
        {"id":3,"address1":"3480 Algoma Place","address2":"725 Orin Center","city":"Fairfax","state":"Virginia","zipCode":"22036"},
        {"id":4,"address1":"981 Bonner Court","address2":"22599 Elgar Hill","city":"Detroit","state":"Michigan","zipCode":"48275"},
        {"id":5,"address1":"3583 Pearson Drive","address2":"3 Lunder Junction","city":"Austin","state":"Texas","zipCode":"78778"},
        {"id":6,"address1":"712 Thierer Street","address2":"97 Manley Street","city":"Miami","state":"Florida","zipCode":"33245"},
        {"id":7,"address1":"64817 Welch Street","address2":"854 Columbus Park","city":"Raleigh","state":"North Carolina","zipCode":"27615"},
        {"id":8,"address1":"4478 Express Road","address2":"02 Utah Center","city":"Flint","state":"Michigan","zipCode":"48550"},
        {"id":9,"address1":"722 International Circle","address2":"00093 Thompson Crossing","city":"Oakland","state":"California","zipCode":"94605"},
        {"id":10,"address1":"761 Brentwood Street","address2":"2 Chinook Trail","city":"Reno","state":"Nevada","zipCode":"89519"},
        {"id":11,"address1":"2 Farwell Plaza","address2":"05173 Twin Pines Junction","city":"Pensacola","state":"Florida","zipCode":"32595"},
        {"id":12,"address1":"5 Waubesa Place","address2":"0744 Anniversary Lane","city":"Washington","state":"District of Columbia","zipCode":"20010"},
        {"id":13,"address1":"39 Oriole Hill","address2":"44117 Bayside Lane","city":"Johnson City","state":"Tennessee","zipCode":"37605"},
        {"id":14,"address1":"2 Rockefeller Court","address2":"6910 Monument Way","city":"Wilkes Barre","state":"Pennsylvania","zipCode":"18706"},
        {"id":15,"address1":"07072 Westerfield Court","address2":"76 Hovde Plaza","city":"Flushing","state":"New York","zipCode":"11388"},
        {"id":16,"address1":"4 Mariners Cove Hill","address2":"94867 Lighthouse Bay Street","city":"Oklahoma City","state":"Oklahoma","zipCode":"73167"},
        {"id":17,"address1":"98 Vidon Trail","address2":"1060 Veith Pass","city":"Bakersfield","state":"California","zipCode":"93399"},
        {"id":18,"address1":"1 Burrows Drive","address2":"542 Marcy Drive","city":"Dulles","state":"Virginia","zipCode":"20189"},
        {"id":19,"address1":"4 Golf Park","address2":"1980 Ruskin Terrace","city":"Brooklyn","state":"New York","zipCode":"11254"},
        {"id":20,"address1":"0030 Mayfield Crossing","address2":"03990 Hanson Center","city":"Charleston","state":"West Virginia","zipCode":"25331"},
        {"id":21,"address1":"7 Grayhawk Park","address2":"50988 Packers Parkway","city":"Schenectady","state":"New York","zipCode":"12305"},
        {"id":22,"address1":"87560 West Road","address2":"40294 Lawn Pass","city":"Richmond","state":"Virginia","zipCode":"23272"},
        {"id":23,"address1":"178 Monument Park","address2":"3 Dapin Circle","city":"Kalamazoo","state":"Michigan","zipCode":"49006"},
        {"id":24,"address1":"10 Veith Pass","address2":"445 Lillian Pass","city":"Wilmington","state":"Delaware","zipCode":"19886"},
        {"id":25,"address1":"6393 Buell Junction","address2":"42 Arkansas Parkway","city":"Denver","state":"Colorado","zipCode":"80228"},
        {"id":26,"address1":"61611 Hollow Ridge Way","address2":"7 Twin Pines Street","city":"Naples","state":"Florida","zipCode":"34102"},
        {"id":27,"address1":"6 Lakewood Road","address2":"04 Paget Hill","city":"El Paso","state":"Texas","zipCode":"88569"},
        {"id":28,"address1":"6605 4th Plaza","address2":"4829 David Drive","city":"Miami","state":"Florida","zipCode":"33134"},
        {"id":29,"address1":"2 Londonderry Way","address2":"0338 Union Way","city":"Pueblo","state":"Colorado","zipCode":"81005"},
        {"id":30,"address1":"3601 Dottie Street","address2":"51711 Oak Avenue","city":"Jersey City","state":"New Jersey","zipCode":"07310"},
        {"id":31,"address1":"51616 Bunker Hill Circle","address2":"23628 Armistice Drive","city":"Winston Salem","state":"North Carolina","zipCode":"27157"},
        {"id":32,"address1":"199 Mayfield Alley","address2":"0700 Transport Alley","city":"Clearwater","state":"Florida","zipCode":"34620"},
        {"id":33,"address1":"8 Summit Drive","address2":"59929 Johnson Park","city":"Raleigh","state":"North Carolina","zipCode":"27690"},
        {"id":34,"address1":"5739 Myrtle Alley","address2":"1807 Ridgeway Lane","city":"Van Nuys","state":"California","zipCode":"91499"},
        {"id":35,"address1":"9 Drewry Avenue","address2":"12 Dorton Alley","city":"Saint Petersburg","state":"Florida","zipCode":"33715"},
        {"id":36,"address1":"2 Cherokee Circle","address2":"35855 West Alley","city":"Daytona Beach","state":"Florida","zipCode":"32118"},
        {"id":37,"address1":"6 Sherman Junction","address2":"67 Manley Center","city":"Washington","state":"District of Columbia","zipCode":"20078"},
        {"id":38,"address1":"26 Bowman Crossing","address2":"4808 Mariners Cove Trail","city":"Baltimore","state":"Maryland","zipCode":"21282"},
        {"id":39,"address1":"9 Carey Plaza","address2":"06479 Randy Center","city":"New York City","state":"New York","zipCode":"10125"},
        {"id":40,"address1":"1 Katie Hill","address2":"13 Chive Lane","city":"Washington","state":"District of Columbia","zipCode":"20046"},
        {"id":41,"address1":"82707 Butternut Circle","address2":"85325 Dawn Pass","city":"Houston","state":"Texas","zipCode":"77288"},
        {"id":42,"address1":"61 Grover Court","address2":"5 Harbort Pass","city":"Tacoma","state":"Washington","zipCode":"98417"},
        {"id":43,"address1":"6 Fairview Center","address2":"6783 East Alley","city":"Brooklyn","state":"New York","zipCode":"11225"},
        {"id":44,"address1":"492 Waywood Crossing","address2":"5512 Talmadge Center","city":"Houston","state":"Texas","zipCode":"77223"},
        {"id":45,"address1":"4 Clemons Terrace","address2":"74 Oxford Terrace","city":"Indianapolis","state":"Indiana","zipCode":"46231"},
        {"id":46,"address1":"62331 2nd Point","address2":"3 Ridgeview Drive","city":"Buffalo","state":"New York","zipCode":"14215"},
        {"id":47,"address1":"7 Mitchell Street","address2":"58854 Dottie Drive","city":"Irvine","state":"California","zipCode":"92619"},
        {"id":48,"address1":"11222 Wayridge Pass","address2":"9 Hanover Park","city":"Charlotte","state":"North Carolina","zipCode":"28299"},
        {"id":49,"address1":"87085 Forster Lane","address2":"6 Russell Terrace","city":"Inglewood","state":"California","zipCode":"90398"},
        {"id":50,"address1":"04637 Prentice Pass","address2":"9902 Kedzie Terrace","city":"Washington","state":"District of Columbia","zipCode":"20215"}],
    billing_addresses:[{"id":1,"address1":"0193 Melby Place","address2":"812 Sullivan Drive","city":"Dayton","state":"Ohio","zipCode":"45414"},
        {"id":2,"address1":"18368 Esker Way","address2":"26916 Coleman Junction","city":"Littleton","state":"Colorado","zipCode":"80127"},
        {"id":3,"address1":"39 Westport Circle","address2":"17272 Eagle Crest Center","city":"Washington","state":"District of Columbia","zipCode":"20380"},
        {"id":4,"address1":"1 Stuart Street","address2":"663 Linden Alley","city":"New York City","state":"New York","zipCode":"10260"},
        {"id":5,"address1":"872 Old Shore Alley","address2":"18066 Northridge Street","city":"Pensacola","state":"Florida","zipCode":"32595"},
        {"id":6,"address1":"34798 Warner Park","address2":"38587 Golden Leaf Street","city":"Los Angeles","state":"California","zipCode":"90189"},
        {"id":7,"address1":"08 Steensland Court","address2":"986 Kensington Park","city":"Van Nuys","state":"California","zipCode":"91406"},
        {"id":8,"address1":"6308 Carpenter Lane","address2":"5 Texas Junction","city":"Houston","state":"Texas","zipCode":"77228"},
        {"id":9,"address1":"485 Holy Cross Street","address2":"8 Old Gate Avenue","city":"Dayton","state":"Ohio","zipCode":"45403"},
        {"id":10,"address1":"5590 Vidon Pass","address2":"5 Bluestem Center","city":"Chicago","state":"Illinois","zipCode":"60674"},
        {"id":11,"address1":"30 Southridge Lane","address2":"35733 Basil Alley","city":"Shreveport","state":"Louisiana","zipCode":"71130"},
        {"id":12,"address1":"39901 Veith Terrace","address2":"1649 Dwight Crossing","city":"Atlanta","state":"Georgia","zipCode":"30306"},
        {"id":13,"address1":"7530 Golf Course Drive","address2":"61538 Atwood Pass","city":"Everett","state":"Washington","zipCode":"98206"},
        {"id":14,"address1":"0 Dorton Hill","address2":"1364 Forest Place","city":"Brooklyn","state":"New York","zipCode":"11231"},
        {"id":15,"address1":"9 Old Shore Drive","address2":"90249 Lunder Street","city":"Virginia Beach","state":"Virginia","zipCode":"23464"},
        {"id":16,"address1":"91698 Holmberg Plaza","address2":"984 Lotheville Place","city":"Charlotte","state":"North Carolina","zipCode":"28210"},
        {"id":17,"address1":"177 Michigan Junction","address2":"06622 Fremont Place","city":"Palo Alto","state":"California","zipCode":"94302"},
        {"id":18,"address1":"71748 Delladonna Parkway","address2":"748 Superior Way","city":"Bloomington","state":"Illinois","zipCode":"61709"},
        {"id":19,"address1":"97526 Colorado Center","address2":"6861 Kings Circle","city":"San Antonio","state":"Texas","zipCode":"78285"},
        {"id":20,"address1":"1 Dorton Street","address2":"5214 Kennedy Circle","city":"Philadelphia","state":"Pennsylvania","zipCode":"19125"},
        {"id":21,"address1":"0599 Nancy Center","address2":"45600 Old Shore Hill","city":"Miami","state":"Florida","zipCode":"33233"},
        {"id":22,"address1":"63 Norway Maple Point","address2":"40109 Ryan Alley","city":"Springfield","state":"Illinois","zipCode":"62764"},
        {"id":23,"address1":"19 Spaight Street","address2":"61580 Norway Maple Junction","city":"Jacksonville","state":"Florida","zipCode":"32215"},
        {"id":24,"address1":"75791 Steensland Avenue","address2":"9799 Lakewood Gardens Circle","city":"Tacoma","state":"Washington","zipCode":"98405"},
        {"id":25,"address1":"4 High Crossing Way","address2":"4 Grasskamp Center","city":"New York City","state":"New York","zipCode":"10090"},
        {"id":26,"address1":"62 Onsgard Park","address2":"377 Westport Road","city":"Fort Pierce","state":"Florida","zipCode":"34949"},
        {"id":27,"address1":"03628 Sycamore Trail","address2":"379 Fair Oaks Parkway","city":"Sacramento","state":"California","zipCode":"94297"},
        {"id":28,"address1":"257 Vidon Way","address2":"7 Knutson Terrace","city":"Concord","state":"California","zipCode":"94522"},
        {"id":29,"address1":"0 Towne Trail","address2":"867 Morningstar Street","city":"Detroit","state":"Michigan","zipCode":"48206"},
        {"id":30,"address1":"4 Boyd Center","address2":"376 Hallows Parkway","city":"Atlanta","state":"Georgia","zipCode":"31106"},
        {"id":31,"address1":"45 Katie Way","address2":"5765 Golf Street","city":"Homestead","state":"Florida","zipCode":"33034"},
        {"id":32,"address1":"00936 Clove Junction","address2":"2 Schmedeman Lane","city":"Gainesville","state":"Georgia","zipCode":"30506"},
        {"id":33,"address1":"4962 Express Place","address2":"79 Larry Court","city":"Washington","state":"District of Columbia","zipCode":"20062"},
        {"id":34,"address1":"645 Hoepker Plaza","address2":"8 Mesta Hill","city":"Anaheim","state":"California","zipCode":"92812"},
        {"id":35,"address1":"6 Coleman Road","address2":"54469 Haas Street","city":"Chicago","state":"Illinois","zipCode":"60646"},
        {"id":36,"address1":"81 Fisk Point","address2":"0645 Sutherland Pass","city":"Philadelphia","state":"Pennsylvania","zipCode":"19178"},
        {"id":37,"address1":"9 Ludington Circle","address2":"625 Manley Point","city":"Seattle","state":"Washington","zipCode":"98166"},
        {"id":38,"address1":"939 Sutteridge Park","address2":"3 Nevada Point","city":"Maple Plain","state":"Minnesota","zipCode":"55579"},
        {"id":39,"address1":"0 Roth Plaza","address2":"0 Hanover Point","city":"Brooklyn","state":"New York","zipCode":"11231"},
        {"id":40,"address1":"19271 Starling Circle","address2":"26137 East Parkway","city":"Richmond","state":"Virginia","zipCode":"23277"},
        {"id":41,"address1":"776 Eggendart Crossing","address2":"2057 Morning Way","city":"Duluth","state":"Georgia","zipCode":"30096"},
        {"id":42,"address1":"19 Oak Center","address2":"8 Bluejay Alley","city":"Panama City","state":"Florida","zipCode":"32405"},
        {"id":43,"address1":"117 Logan Place","address2":"4734 Crest Line Street","city":"Phoenix","state":"Arizona","zipCode":"85025"},
        {"id":44,"address1":"50832 Straubel Lane","address2":"4 Scofield Junction","city":"Memphis","state":"Tennessee","zipCode":"38119"},
        {"id":45,"address1":"243 Thompson Parkway","address2":"936 Forest Way","city":"Houston","state":"Texas","zipCode":"77045"},
        {"id":46,"address1":"40389 Kim Lane","address2":"28988 Graedel Center","city":"Washington","state":"District of Columbia","zipCode":"20520"},
        {"id":47,"address1":"62306 Blue Bill Park Alley","address2":"800 Calypso Crossing","city":"San Diego","state":"California","zipCode":"92132"},
        {"id":48,"address1":"7 Tony Pass","address2":"63542 Dixon Street","city":"Roanoke","state":"Virginia","zipCode":"24048"},
        {"id":49,"address1":"0123 Eliot Avenue","address2":"24893 Darwin Road","city":"Jersey City","state":"New Jersey","zipCode":"07310"},
        {"id":50,"address1":"13488 Magdeline Crossing","address2":"35 Farwell Circle","city":"Pompano Beach","state":"Florida","zipCode":"33075"}],
    review: [{"id":1,"title":"Dry Idea A.Dry Antiperspirant Solid Unscented","body":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","rating":4,"date":"3/27/2016"},
        {"id":2,"title":"CYSVIEW","body":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","rating":2,"date":"5/15/2016"},
        {"id":3,"title":"Take Home Fluoride","body":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","rating":4,"date":"10/11/2016"},
        {"id":4,"title":"Alprazolam","body":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","rating":2,"date":"12/7/2016"},
        {"id":5,"title":"Fentanyl","body":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.","rating":1,"date":"3/8/2016"},
        {"id":6,"title":"K-EFFERVESCENT","body":"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.","rating":1,"date":"10/17/2016"},
        {"id":7,"title":"Dizziness - Vertigo","body":"Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","rating":5,"date":"8/6/2016"},
        {"id":8,"title":"Iceberg Lettuce","body":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","rating":5,"date":"2/25/2017"},
        {"id":9,"title":"Childrens Allergy Relief","body":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","rating":5,"date":"5/8/2016"},
        {"id":10,"title":"Risperidone","body":"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.","rating":4,"date":"3/30/2016"},
        {"id":11,"title":"Prednisolone Sodium Phosphate","body":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.","rating":2,"date":"9/7/2016"},
        {"id":12,"title":"Dolce and Gabbana Daily Moisturizer","body":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.","rating":5,"date":"4/16/2016"},
        {"id":13,"title":"Diltiazem Hydrochloride","body":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","rating":5,"date":"2/27/2017"},
        {"id":14,"title":"Double Tussin Intense Cough Reliever","body":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","rating":3,"date":"3/29/2016"},
        {"id":15,"title":"Meclizine Hydrochloride","body":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","rating":3,"date":"8/18/2016"},
        {"id":16,"title":"Ciprofloxacin Hydrochloride","body":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.","rating":2,"date":"12/24/2016"},
        {"id":17,"title":"Leader Fiber","body":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","rating":3,"date":"2/2/2017"},
        {"id":18,"title":"Atomoxetine Hydrochloride","body":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","rating":2,"date":"1/8/2017"},
        {"id":19,"title":"Night Time Cherry","body":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","rating":4,"date":"9/13/2016"},
        {"id":20,"title":"bareMinerals READY Touch Up Veil Broad Spectrum SPF 15","body":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","rating":1,"date":"10/22/2016"},
        {"id":21,"title":"The Cover Classic Soft Foundation","body":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.","rating":3,"date":"12/16/2016"},
        {"id":22,"title":"Fusarium oxysporum","body":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.","rating":5,"date":"8/6/2016"},
        {"id":23,"title":"Lithium Carbonate","body":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","rating":2,"date":"11/16/2016"},
        {"id":24,"title":"complete","body":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.","rating":4,"date":"11/9/2016"},
        {"id":25,"title":"Zyprexa","body":"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.","rating":4,"date":"7/14/2016"}],
    Cart: [{"id":1,"quantity":24,"price":36},
        {"id":2,"quantity":9,"price":75},
        {"id":3,"quantity":3,"price":67},
        {"id":4,"quantity":12,"price":69},
        {"id":5,"quantity":21,"price":99},
        {"id":6,"quantity":37,"price":86},
        {"id":7,"quantity":27,"price":70},
        {"id":8,"quantity":21,"price":6},
        {"id":9,"quantity":2,"price":41},
        {"id":10,"quantity":44,"price":73},
        {"id":11,"quantity":15,"price":95},
        {"id":12,"quantity":8,"price":43},
        {"id":13,"quantity":16,"price":99},
        {"id":14,"quantity":15,"price":48},
        {"id":15,"quantity":13,"price":11},
        {"id":16,"quantity":40,"price":29},
        {"id":17,"quantity":21,"price":63},
        {"id":18,"quantity":5,"price":94},
        {"id":19,"quantity":9,"price":1},
        {"id":20,"quantity":14,"price":68},
        {"id":21,"quantity":44,"price":74},
        {"id":22,"quantity":23,"price":65},
        {"id":23,"quantity":31,"price":46},
        {"id":24,"quantity":31,"price":72},
        {"id":25,"quantity":40,"price":46}],
    category: [{"id":1,"title":"Card Games"},
        {"id":2,"title":"Strategy"},
        {"id":3,"title":"Dice"},
        {"id":4,"title":"Deduction"},
        {"id":5,"title":"Maze"}],
    credit_cards: [{"id":1,"number":3468},
        {"id":2,"number":3422},
        {"id":3,"number":3416},
        {"id":4,"number":3418},
        {"id":5,"number":3074},
        {"id":6,"number":3299},
        {"id":7,"number":3393},
        {"id":8,"number":3232},
        {"id":9,"number":3811},
        {"id":10,"number":3812},
        {"id":11,"number":3158},
        {"id":12,"number":3483},
        {"id":13,"number":3670},
        {"id":14,"number":3552},
        {"id":15,"number":3086},
        {"id":16,"number":3344},
        {"id":17,"number":3435},
        {"id":18,"number":3841},
        {"id":19,"number":3268},
        {"id":20,"number":3684},
        {"id":21,"number":3643},
        {"id":22,"number":3145},
        {"id":23,"number":3708},
        {"id":24,"number":3369},
        {"id":25,"number":3475},
        {"id":26,"number":3782},
        {"id":27,"number":3700},
        {"id":28,"number":3128},
        {"id":29,"number":3990},
        {"id":30,"number":3331},
        {"id":31,"number":3488},
        {"id":32,"number":3648},
        {"id":33,"number":3442},
        {"id":34,"number":3220},
        {"id":35,"number":3113},
        {"id":36,"number":3482},
        {"id":37,"number":3576},
        {"id":38,"number":3795},
        {"id":39,"number":3662},
        {"id":40,"number":3274},
        {"id":41,"number":3694},
        {"id":42,"number":3986},
        {"id":43,"number":3925},
        {"id":44,"number":3898},
        {"id":45,"number":3571},
        {"id":46,"number":3251},
        {"id":47,"number":3784},
        {"id":48,"number":3443},
        {"id":49,"number":3841},
        {"id":50,"number":3272}],
    LineItems: [{"id":1,"quantity":6,"price":21},
        {"id":2,"quantity":50,"price":67},
        {"id":3,"quantity":50,"price":95},
        {"id":4,"quantity":5,"price":49},
        {"id":5,"quantity":38,"price":69},
        {"id":6,"quantity":48,"price":18},
        {"id":7,"quantity":48,"price":88},
        {"id":8,"quantity":19,"price":34},
        {"id":9,"quantity":18,"price":69},
        {"id":10,"quantity":10,"price":56},
        {"id":11,"quantity":16,"price":22},
        {"id":12,"quantity":16,"price":70},
        {"id":13,"quantity":49,"price":36},
        {"id":14,"quantity":41,"price":47},
        {"id":15,"quantity":6,"price":10},
        {"id":16,"quantity":4,"price":59},
        {"id":17,"quantity":3,"price":71},
        {"id":18,"quantity":38,"price":93},
        {"id":19,"quantity":27,"price":56},
        {"id":20,"quantity":20,"price":10},
        {"id":21,"quantity":4,"price":25},
        {"id":22,"quantity":19,"price":49},
        {"id":23,"quantity":10,"price":80},
        {"id":24,"quantity":47,"price":68},
        {"id":25,"quantity":14,"price":91}],
    product: [{"id":1,"title":"McLaughlin-Turner","description":"Sed sagittis.","price":42,"imgURL":"http://dummyimage.com/250x250.jpg/dddddd/000000"},
        {"id":2,"title":"Gleason Group","description":"Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.","price":88,"imgURL":"http://dummyimage.com/250x250.bmp/ff4444/ffffff"},
        {"id":3,"title":"Nitzsche Group","description":"Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.","price":34,"imgURL":"http://dummyimage.com/250x250.bmp/cc0000/ffffff"},
        {"id":4,"title":"Hayes-O'Connell","description":"Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.","price":10,"imgURL":"http://dummyimage.com/250x250.png/5fa2dd/ffffff"},
        {"id":5,"title":"Crooks-Gottlieb","description":"Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.","price":51,"imgURL":"http://dummyimage.com/250x250.png/cc0000/ffffff"},
        {"id":6,"title":"Ryan, Upton and Prosacco","description":"Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.","price":61,"imgURL":"http://dummyimage.com/250x250.jpg/cc0000/ffffff"},
        {"id":7,"title":"Ondricka, Vandervort and Dare","description":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.","price":87,"imgURL":"http://dummyimage.com/250x250.jpg/cc0000/ffffff"},
        {"id":8,"title":"Cormier, Hahn and Larkin","description":"Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.","price":25,"imgURL":"http://dummyimage.com/250x250.jpg/ff4444/ffffff"},
        {"id":9,"title":"Moen-Schmitt","description":"Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","price":72,"imgURL":"http://dummyimage.com/250x250.bmp/cc0000/ffffff"},
        {"id":10,"title":"Wiza-Hyatt","description":"Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.","price":92,"imgURL":"http://dummyimage.com/250x250.bmp/dddddd/000000"},
        {"id":11,"title":"Crona-Greenholt","description":"Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.","price":56,"imgURL":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"},
        {"id":12,"title":"Rosenbaum Inc","description":"Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.","price":2,"imgURL":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"},
        {"id":13,"title":"Skiles, Sporer and Fay","description":"Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","price":68,"imgURL":"http://dummyimage.com/250x250.bmp/5fa2dd/ffffff"},
        {"id":14,"title":"Hudson LLC","description":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.","price":71,"imgURL":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"},
        {"id":15,"title":"Wilderman, Feil and Howell","description":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.","price":12,"imgURL":"http://dummyimage.com/250x250.png/cc0000/ffffff"},
        {"id":16,"title":"Zboncak LLC","description":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.","price":23,"imgURL":"http://dummyimage.com/250x250.bmp/cc0000/ffffff"},
        {"id":17,"title":"Leffler, Franecki and Hammes","description":"Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.","price":17,"imgURL":"http://dummyimage.com/250x250.jpg/dddddd/000000"},
        {"id":18,"title":"Lakin-Labadie","description":"Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.","price":75,"imgURL":"http://dummyimage.com/250x250.jpg/cc0000/ffffff"},
        {"id":19,"title":"Feest-Mills","description":"Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","price":43,"imgURL":"http://dummyimage.com/250x250.jpg/ff4444/ffffff"},
        {"id":20,"title":"Gusikowski-Harris","description":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.","price":37,"imgURL":"http://dummyimage.com/250x250.bmp/dddddd/000000"},
        {"id":21,"title":"Bergstrom and Sons","description":"In congue. Etiam justo.","price":59,"imgURL":"http://dummyimage.com/250x250.jpg/ff4444/ffffff"},
        {"id":22,"title":"Jenkins, Medhurst and Kling","description":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","price":65,"imgURL":"http://dummyimage.com/250x250.jpg/ff4444/ffffff"},
        {"id":23,"title":"Schamberger and Sons","description":"In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.","price":10,"imgURL":"http://dummyimage.com/250x250.png/5fa2dd/ffffff"},
        {"id":24,"title":"Gaylord and Sons","description":"Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","price":70,"imgURL":"http://dummyimage.com/250x250.png/ff4444/ffffff"},
        {"id":25,"title":"Price, Dickens and Conroy","description":"Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","price":41,"imgURL":"http://dummyimage.com/250x250.jpg/dddddd/000000"},
        {"id":26,"title":"Stanton-Heaney","description":"Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.","price":70,"imgURL":"http://dummyimage.com/250x250.png/ff4444/ffffff"},
        {"id":27,"title":"Haag-Ziemann","description":"Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.","price":15,"imgURL":"http://dummyimage.com/250x250.png/ff4444/ffffff"},
        {"id":28,"title":"Bernier, Breitenberg and Koch","description":"Quisque ut erat.","price":10,"imgURL":"http://dummyimage.com/250x250.bmp/cc0000/ffffff"},
        {"id":29,"title":"Ebert Inc","description":"Vivamus in felis eu sapien cursus vestibulum.","price":48,"imgURL":"http://dummyimage.com/250x250.jpg/cc0000/ffffff"},
        {"id":30,"title":"Cruickshank, Towne and Brekke","description":"Pellentesque ultrices mattis odio. Donec vitae nisi.","price":74,"imgURL":"http://dummyimage.com/250x250.png/dddddd/000000"},
        {"id":31,"title":"Roob, Bergstrom and Toy","description":"Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.","price":44,"imgURL":"http://dummyimage.com/250x250.bmp/ff4444/ffffff"},
        {"id":32,"title":"Reilly-Becker","description":"Nunc rhoncus dui vel sem. Sed sagittis.","price":38,"imgURL":"http://dummyimage.com/250x250.jpg/ff4444/ffffff"},
        {"id":33,"title":"Swaniawski, Fahey and Cummings","description":"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.","price":33,"imgURL":"http://dummyimage.com/250x250.png/ff4444/ffffff"},
        {"id":34,"title":"Treutel, Bernier and Jakubowski","description":"Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","price":83,"imgURL":"http://dummyimage.com/250x250.png/ff4444/ffffff"},
        {"id":35,"title":"Stark-Schimmel","description":"Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.","price":4,"imgURL":"http://dummyimage.com/250x250.jpg/dddddd/000000"},
        {"id":36,"title":"Ledner, Doyle and Hoppe","description":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.","price":31,"imgURL":"http://dummyimage.com/250x250.bmp/5fa2dd/ffffff"},
        {"id":37,"title":"Emard, Christiansen and Kling","description":"Aliquam erat volutpat. In congue.","price":5,"imgURL":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"},
        {"id":38,"title":"Cronin, Abshire and Bechtelar","description":"Donec semper sapien a libero. Nam dui.","price":10,"imgURL":"http://dummyimage.com/250x250.bmp/ff4444/ffffff"},
        {"id":39,"title":"Schimmel, Pouros and Skiles","description":"Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","price":62,"imgURL":"http://dummyimage.com/250x250.png/5fa2dd/ffffff"},
        {"id":40,"title":"Jacobson-Ferry","description":"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.","price":28,"imgURL":"http://dummyimage.com/250x250.png/dddddd/000000"},
        {"id":41,"title":"Nitzsche-McGlynn","description":"Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.","price":30,"imgURL":"http://dummyimage.com/250x250.bmp/5fa2dd/ffffff"},
        {"id":42,"title":"Brekke and Sons","description":"Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.","price":37,"imgURL":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"},
        {"id":43,"title":"Goldner LLC","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.","price":17,"imgURL":"http://dummyimage.com/250x250.png/5fa2dd/ffffff"},
        {"id":44,"title":"Gislason-Rodriguez","description":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.","price":6,"imgURL":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"},
        {"id":45,"title":"Dibbert Group","description":"Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.","price":52,"imgURL":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"},
        {"id":46,"title":"Mayer Group","description":"Duis bibendum. Morbi non quam nec dui luctus rutrum.","price":31,"imgURL":"http://dummyimage.com/250x250.bmp/5fa2dd/ffffff"},
        {"id":47,"title":"Kessler Group","description":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.","price":66,"imgURL":"http://dummyimage.com/250x250.bmp/cc0000/ffffff"},
        {"id":48,"title":"Hansen LLC","description":"Proin eu mi. Nulla ac enim.","price":46,"imgURL":"http://dummyimage.com/250x250.png/cc0000/ffffff"},
        {"id":49,"title":"D'Amore LLC","description":"Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.","price":88,"imgURL":"http://dummyimage.com/250x250.bmp/5fa2dd/ffffff"},
        {"id":50,"title":"Gleason-Rutherford","description":"Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","price":16,"imgURL":"http://dummyimage.com/250x250.jpg/ff4444/ffffff"}],
    Order: [{
        "id": 1,
        "status": "Created",
        "totalPrice": 68
    }, {
        "id": 2,
        "status": "Cancelled",
        "totalPrice": 133
    }, {
        "id": 3,
        "status": "Completed",
        "totalPrice": 188
    }, {
        "id": 4,
        "status": "Created",
        "totalPrice": 57
    }, {
        "id": 5,
        "status": "Processing",
        "totalPrice": 101
    }, {
        "id": 6,
        "status": "Cancelled",
        "totalPrice": 154
    }, {
        "id": 7,
        "status": "Created",
        "totalPrice": 161
    }, {
        "id": 8,
        "status": "Completed",
        "totalPrice": 83
    }, {
        "id": 9,
        "status": "Processing",
        "totalPrice": 100
    }, {
        "id": 10,
        "status": "Completed",
        "totalPrice": 58
    }, {
        "id": 11,
        "status": "Created",
        "totalPrice": 190
    }, {
        "id": 12,
        "status": "Completed",
        "totalPrice": 175
    }, {
        "id": 13,
        "status": "Completed",
        "totalPrice": 147
    }, {
        "id": 14,
        "status": "Completed",
        "totalPrice": 76
    }, {
        "id": 15,
        "status": "Cancelled",
        "totalPrice": 77
    }, {
        "id": 16,
        "status": "Completed",
        "totalPrice": 143
    }, {
        "id": 17,
        "status": "Processing",
        "totalPrice": 110
    }, {
        "id": 18,
        "status": "Created",
        "totalPrice": 169
    }, {
        "id": 19,
        "status": "Processing",
        "totalPrice": 193
    }, {
        "id": 20,
        "status": "Completed",
        "totalPrice": 124
    }, {
        "id": 21,
        "status": "Created",
        "totalPrice": 71
    }, {
        "id": 22,
        "status": "Completed",
        "totalPrice": 127
    }, {
        "id": 23,
        "status": "Cancelled",
        "totalPrice": 130
    }, {
        "id": 24,
        "status": "Created",
        "totalPrice": 177
    }, {
        "id": 25,
        "status": "Processing",
        "totalPrice": 106
    }]
};

db.sync({force: true})
  .then(function(){
    console.log('Dropped old data, now inserting data');
    return Promise.map(Object.keys(data), function(name){
      return Promise.map(data[name], function(item){
        return db.model(name)
          .create(item);
      });
    });
  })
  .then(function(){
    console.log('inserted data');
  })
  .catch(function(err){
    console.error('there was a problem', err, err.stack);
  })
  .finally(function(){
    db.close();
    console.log('connection closed');
    return null;
  });
