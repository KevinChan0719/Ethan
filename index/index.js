const i18n = new VueI18n({
  locale: "en_US",
  messages: {
    zh_CN: {
      header: {
        home: "主页",
        about: "关于我们",
        roadmap: "项目进程",
        media: "媒体报道",
        partners: "合作伙伴",
        explorer: "区块浏览器",
        language: "简体中文"
      },
      about: {
        title: "关于我们",
        general: {
          first:
            "比特支付是由两大专注于比特币支付的团队：Bitcoin Pay和Bitcoin Flyer共同发起的一个超级信贷运营商项目，以比特币的信用为基础，目标是在比特币和其他数字货币的联合信贷中建立一个强大的跨链智能合约服务于整个区块链网络，旨在将区块链技术广泛应用和服务于社会。",
          second:
            "比特支付UTC+1时间2017年12月16日在比特币区块高度499,345执行分叉，以1比特币=10比特支付匹配比特币资产，完成数据迁移，总量为210,000,000，延续比特币的POW算法，采用GPU挖矿模式（无预挖），扩容到8M的大区块；支持隔离验证，闪电网络，零知识证明，加强隐私保护，同时使用双方向重放保护。"
        },
        whitepaper: {
          btnText: "阅读白皮书",
          general:
            "初版白皮书由全球首个数字加密货币匿名创造者中本聪（Satoshi Nakamoto）在2008年10月31日发表。白皮书名为“比特币:一种点对点电子现金系统(Bitcoinpay:A Peer-to-Peer Electronic Cash System)”。比特币现金旨在延续为全球创造一种健全货币的愿景。"
        }
      },
      roadmap: {
        title: "项目进程",
        Q32017: "比特支付项目成立",
        Q42017: "执行分叉、</br>测试版网页1.0上线、</br>发布会",
        Q12018: "测试版钱包1.0上线、</br>测试版网页2.0上线",
        Q22018: "测试版主网1.0上线、</br>上线更多交易所",
        Q32018: {
          first: "测试版主网2.0上线、</br>测试版钱包2.0上线",
          second: "测试版主网3.0上线、</br>与区块链商城及游戏合作"
        },
        Q42018: "测试版主网4.0上线、</br>测试版钱包3.0上线",
        Q12019: "正式版主网1.0上线",
        Q22019: "测试版钱包4.0上线、</br>支持更多跨链资产",
        Q32019: "正式版主网2.0上线"
      },
      press: {
        title: "媒体报道",
        main: {
          first: {
            title: "BTP即将上线qbtc.com",
            general: "QBTC是一个交易平台，中文名字叫国际Q网。将于2018年1月22日18点开放BTP/CNYT交易。BTP中文名比特支付，为比特币的分叉币，采用GPU挖矿，扩容区块为8M，总量2.1亿。",
            imgUrl: 'images/press/press_1.jpg',
            day: "21",
            month: "JAN"
          },
          second: {
            title: "比特支付BTP涨幅达870%",
            general: "BTP价格从上线时的16美金涨至最高价139.99美金，目前维持在120美金以上的价格，涨幅高达870%。BTP中文为比特支付，是比特币的反差比，旨在对接全球线上线下支付，采用GPU挖矿，扩容区块为8M，总量2.1亿枚，无预挖。",
            imgUrl: 'images/press/press_5.jpg',
            day: "18",
            month: "JAN"
          },
          third: {
            title: "比特支付BTP正式上线ZB",
            general: "今日ZB发布公告称，ZB.com将于2018年1月3日20点开放BTP/QC、BTP/USDT、BTP/BTC交易。BTP中文名称比特支付，是比特币的分叉币，采用GPU挖矿，扩容区块为8M，总量2.1亿枚，无预挖。",
            imgUrl: 'images/press/press_6.jpg',
            day: "03",
            month: "JAN"
          }
        }
      },
      partners: {
        title: "合作伙伴",
        general: "我们现在下列交易所进行交易"
      }
    },
    en_US: {
      header: {
        home: "Home",
        about: "About Us",
        roadmap: "Roadmap",
        media: "Press",
        partners: "Partners",
        explorer: "Explorer",
        language: "English"
      },
      about: {
        title: "ABOUT",
        general: {
          first:
            "Bitcoinpay is a super credit operator project launched by the two major teams focusing on the bitcoin payment: Bitcoin Pay and Bitcoins Flyer. On the basis of bitcoin credit and aiming at widely use and service in society, Bitcoinpay targets on setting up a powerful cross-chain intelligent contract with bitcoin and other cryptos applying for the whole blockchain.",
          second:
            "Bitcoinpay had forked at block height of 499,345 on 12,16th ,2017 (UTC+ 1) and finished data migration of 210,000,000 amount crediting 1 BTP for every 1 BTC. Continuing the POW algorithm of bitcoin, the mining mode of GPU (no pre-mining) was adopted to expand the capacity to 8M blocks. Bitcoinpay supports isolation verification, Lightning Network and zero-knowledge proof. It also enhances privacy protection while using both parties to replay protection."
        },
        whitepaper: {
          btnText: "Read The Whitepape",
          general:
            'The original whitepaper was published on October 31, 2008 by Satoshi Nakamoto, the anonymous creator of the world’s first cryptocurrency. The title of the Bitcoin whitepaper is "Bitcoin: A Peer-to-Peer Electronic Cash System". Bitcoinpay aims to continue this vision of bringing sound money to the world.'
        }
      },
      roadmap: {
        title: "ROADMAP",
        Q32017: "Bitcoin Pay Project Established",
        Q42017: "Finish Hard Fork、</br>Launch Beta Web 1.0、</br>Launch Event",
        Q12018: "Launch Beta Wallet 1.0、</br>Launch Beta Web 2.0",
        Q22018: "Launch Beta Main net 1.0、</br>List on more exchanges",
        Q32018: {
          first: "Launch Beta Main net 2.0、</br>Launch Beta Wallet 2.0",
          second:
            "Launch Beta Main net 3.0、</br>More Cooperation with blockchain and gaming companies and applications"
        },
        Q42018: "Launch Beta Main net 4.0、</br>Launch Beta Wallet 3.0",
        Q12019: "Launch official Main net 1.0",
        Q22019:
          "Launch Beta Wallet 4.0、</br>Support more multi-blockchain assets",
        Q32019: "Launch Official Main net 2.0"
      },
      press: {
        title: "PRESS",
        main: {
          first: {
            title: "BTP Mainnet will be Upgraded in May",
            general: "We are going to upgrade Bitcoinpay's mainnet in the following May, 2019, in which we'll change the algorithm from POW to POS in order to fix a variety of security problems resulted from computing fluctuations as well as to avoid computing resources waste. After upgrading, Bitcoinpay is able to support smart contract, which can avoid centralization by oligarchic combination much more better. And currently BTP's main transaction is on zb.com exchange platform and we will be listed on other major exchanges after this mainnet upgrading. ",
            imgUrl: 'images/press/press_7.jpg',
            day: "29",
            month: "APR"
          },
          second: {
            title: "BTP To Be Online On QBTC.COM",
            general: "QBTC is a cryptocurrency exchange as known as “International Q Net” in Chinese. It will open the BTP/CNYT transaction at 18:00, Jan, 22nd, 2018. BTP is short for Bitcoinpay, which is the fork cryptocurrency of Bitcoin. The mining mode of GPU was adopted to expand the capacity to 8M blocks with a total amount of 210,000,000.",
            imgUrl: 'images/press/press_1.jpg',
            day: "21",
            month: "JAN"
          },
          third: {
            title: "Bitcoin Pay BTP Rose 870%",
            general: "BTP’s price has increased from online price of $16 to the top price of $139.99 and maintaining price above $120 with an increase of 870%. BTP is short for Bitcoinpay, which is the fork cryptocurrency of Bitcoin. The mining mode of GPU (no pre-mining) was adopted to expand the capacity to 8M blocks with a total amount of 210,000,000.",
            imgUrl: 'images/press/press_5.jpg',
            day: "18",
            month: "JAN"
          }
        }
      },
      partners: {
        title: "PARTNERS",
        general: "we are now trading on the following exchanges"
      }
    }
  }
});

let main = new Vue({
  el: "#app",
  i18n,
  data() {
    return {
      doc: document.documentElement || document.body,
      press: [
        {
          title: this.$t("press.main.first.title"),
          general: this.$t("press.main.first.general"),
          imgUrl: this.$t("press.main.first.imgUrl"),
          day: this.$t("press.main.first.day"),
          month: this.$t("press.main.first.month")
        },
        {
          title: this.$t("press.main.second.title"),
          general: this.$t("press.main.second.general"),
          imgUrl: this.$t("press.main.second.imgUrl"),
          day: this.$t("press.main.second.day"),
          month: this.$t("press.main.second.month")
        },
        {
          title: this.$t("press.main.third.title"),
          general: this.$t("press.main.third.general"),
          imgUrl: this.$t("press.main.third.imgUrl"),
          day: this.$t("press.main.third.day"),
          month: this.$t("press.main.third.month")
        }
      ],
      sb: ""
    };
  },
  computed: {
    title() {
      return [
        this.$t("press.main.first.title"),
        this.$t("press.main.second.title"),
        this.$t("press.main.third.title")
      ];
    },
    general() {
      return [
        this.$t("press.main.first.general"),
        this.$t("press.main.second.general"),
        this.$t("press.main.third.general")
      ];
    },
    imgUrl() {
      return [
        this.$t("press.main.first.imgUrl"),
        this.$t("press.main.second.imgUrl"),
        this.$t("press.main.third.imgUrl")
      ];
    }
  },
  created() {
    if (this.getQueryVariable("lang")) {
      this.$i18n.locale = this.getQueryVariable("lang");
    }
    
    $.get("press_en.html", d => {
      this.sb = d
    })
  },
  mounted() {
    window.onresize = () => {
      this.bannerResize();
      this.backgroundResize();
    };
    window.onscroll = () => {
      this.changeHeaderColoe();
    };

    this.bannerResize();
    this.backgroundResize();
    this.changeHeaderColoe();
  },
  methods: {
    encode(str) {
      return encodeURI(str);
    },
    getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return false;
    },
    readBook() {
      window.open("../pdf/bitcoin.pdf", "_blank");
    },
    onmouseover(e) {
      this.$refs.changeLang.style.display = "block";
    },
    onmouseout(e) {
      this.$refs.changeLang.style.display = "none";
    },
    changeLang(lang) {
      this.$refs.changeLang.style.display = "none";
      if (lang === "CN") {
        document.title = "比特币支付-区块链网络跨链智能合约服务商";
        this.$set(this.$i18n, "locale", "zh_CN");
        $.get("press_ch.html", d => {
          this.sb = d
        })
      } else {
        document.title = "BitcoinPay-Lightning Payment Solution";
        this.$set(this.$i18n, "locale", "en_US");
        $.get("press_en.html", d => {
          this.sb = d
        })
      }
      this.title.map((e, i) => {
        this.$set(this.press[i], "title", e);
        this.$set(this.press[i], "general", this.general[i]);
        this.$set(this.press[i], "imgUrl", this.imgUrl[i]);
      });
    },
    bannerResize() {
      let docWidth = this.doc.clientWidth;
      let scale = docWidth / 1920;
      if (docWidth > 1920) {
        this.$refs.banner.style.backgroundSize = "100% auto";
        this.$refs.banner.style.backgroundPositionY = "bottom";
        this.$refs.banner.style.height = "900px";
      } else {
        this.$refs.banner.style.backgroundSize = "auto 100%";
        this.$refs.banner.style.backgroundPositionY = "center";
        this.$refs.banner.style.height = `${900 * scale}px`;
      }
    },
    backgroundResize() {
      let press = document.getElementById("press");
      let img = document.getElementsByClassName("img")[0];
      if (img.clientHeight) {
        press.style.background = `linear-gradient(to bottom, #fff, #fff ${img.clientHeight +
          336}px, #f5f5f5 ${img.clientHeight + 336}px, #f5f5f5)`;
      } else {
        img.onload = () => {
          press.style.background = `linear-gradient(to bottom, #fff, #fff ${img.clientHeight +
            336}px, #f5f5f5 ${img.clientHeight + 336}px, #f5f5f5)`;
        };
      }
    },
    changeHeaderColoe() {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      if (scrollTop < 200) {
        this.$refs.header.style.backgroundColor = `rgba(255, 255, 255, ${scrollTop /
          200})`;
        this.$refs.header.style.boxShadow = "none";
        if (scrollTop > 100) {
          this.$refs.header.style.color = "#000";
          this.$refs.logo.style.backgroundImage =
            "url('images/BTP-logo2.png')";
          this.$refs.lang.style.backgroundImage =
            "url('images/BTP-lang2.png')";
        } else {
          this.$refs.header.style.color = "#fff";
          this.$refs.logo.style.backgroundImage =
            "url('images/BTP_logo.png')";
          this.$refs.lang.style.backgroundImage =
            "url('images/BTP_lang.png')";
        }
      } else {
        this.$refs.header.style.backgroundColor = `rgba(255, 255, 255, 1)`;
        this.$refs.header.style.color = "#000";
        this.$refs.header.style.boxShadow =
          "0px 5px 16px 0px rgba(0, 0, 0, 0.1)";
        this.$refs.logo.style.backgroundImage =
          "url('images/BTP-logo2.png')";
        this.$refs.lang.style.backgroundImage =
          "url('images/BTP-lang2.png')";
      }
    }
  }
});
