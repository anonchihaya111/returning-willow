(() => {
  "use strict";
  const STORY = window.WILLOW_STORY;
  const KEY = "huanyuanliu.enhanced.v1";
  const VIEWS = ["home", "forum", "topic", "lostfound", "phone", "diary", "gazette", "codex", "ledger", "contract", "drawer", "keeper", "evidence", "profile"];
  const CLUES = Object.keys(STORY.clues);
  const TOPICS = {
    bus: {
      category: "青河杂谈",
      title: "公交 3 路下周改线，老汽车站还停不停？",
      author: "河西路口",
      date: "2026-09-14 20:31",
      body: "刚看见站牌贴了通知，下周一开始绕北桥。家里老人每天要从老汽车站去县医院，有知道临时站点具体在哪边的吗？",
      reply: "在供销社门口往东五十米。下午问过司机，老汽车站不停了。",
      extraPosts: [
        { name: "北桥老周", role: "注册会员", avatar: "周", floor: "# 3", date: "2026-09-14 21:06", body: "<p>和 6 月 16 日晚那次差不多，也是临时改到北桥。那晚有个叫晚来风的姑娘在旧帖里问末班车，她说自己刚从外地回来。</p><p>要找旧通知，可以点她的用户名看历史发言。</p>" },
      ],
    },
    photos: {
      category: "旧城相册",
      title: "征集青河老街、柳巷和旧码头照片",
      author: "青河影像志",
      date: "2026-09-12 09:18",
      body: "县文化馆整理老城影像，年代不限。请尽量注明地点、年份和照片里的人，原件可到馆扫描后当场归还。",
      reply: "我家有几张 2014 年河边的照片，周末找找。",
      image: true,
    },
    water: {
      category: "生活互助",
      title: "南门片区今晚水压很小，是不是又修管道？",
      author: "桂花婶",
      date: "2026-09-14 22:07",
      body: "十点以后水龙头只剩一条细线，邻居家也一样。明早要开店，有知道什么时候恢复的吗？",
      reply: "自来水公司说零点前恢复，柳巷口那段老管子漏了。",
      extraPosts: [
        { name: "桂花婶", role: "老巷友", avatar: "桂", floor: "# 3", date: "2026-09-14 22:26", body: "<p>六月十六号也停过一次。我给南边林家送过一壶热水，开门的是小舟，说姐姐刚到家，两个人连饭都还没吃完。</p>" },
      ],
    },
    school: {
      category: "青河杂谈",
      title: "实验小学旧校门拆不拆？路过拍了几张",
      author: "巷尾裁缝",
      date: "2026-09-13 17:44",
      body: "围挡已经搭起来了。听说只修门房，不动那两棵香樟。以前在这里上学的来认认，看是不是记忆里的样子。",
      reply: "门口小卖部早没了，树还在。照片看着比我记得窄。",
    },
    rain: {
      category: "社区事务",
      title: "夜雨路滑，柳巷口井盖已临时围住",
      author: "街道值班",
      date: "2026-09-14 22:52",
      body: "柳巷南口一处井盖松动，已经放置警示牌。维修人员明早到场，请夜间经过的居民注意绕行。",
      reply: "收到，刚经过看见围挡了。",
    },
    rules: {
      category: "社区事务",
      title: "柳巷论坛社区公约（2026 年修订）",
      author: "站务组",
      date: "2026-01-03 08:00",
      body: "请勿发布个人电话、住址等隐私信息；求助帖处理完毕后请更新结果；民俗话题请尊重本地习惯，不借机募捐，不发布收费联系方式。",
      reply: "本帖长期开放意见，涉及投诉请使用站内信联系站务。",
    },
    lost: {
      category: "生活互助",
      title: "本周失物招领汇总",
      author: "站务组",
      date: "2026-09-14 18:20",
      body: "文化路捡到一串钥匙，北桥公交站捡到学生卡一张。认领时请说明挂件或卡套特征。",
      reply: "物品暂存社区服务站，开放时间为上午九点至下午五点。",
    },
    returnTrip: {
      category: "青河杂谈",
      title: "【旧帖】晚班车临时改停北桥，末班仍为 20:35",
      author: "公交调度",
      date: "2026-06-16 18:42",
      posts: [
        { name: "公交调度", role: "认证账号", avatar: "交", floor: "楼主", date: "2026-06-16 18:42", body: "<p>因柳巷西段管道抢修，公交 3 路、7 路自今晚十九时起不进老汽车站，临时停靠北桥东侧。末班发车时间不变。</p><p>请从外地返青、需要换乘的乘客提前下车。明早首班起恢复原线。</p>" },
        { name: "晚来风", role: "注册会员", avatar: "晚", floor: "# 2", date: "2026-06-16 20:11", body: "<p>谢谢，刚从外地回来，差点在老汽车站一直等。已经上了去北桥的末班车，今晚能回柳巷。</p>" },
        { name: "北桥老周", role: "注册会员", avatar: "周", floor: "# 3", date: "2026-06-16 20:16", body: "<p>北桥下车往南走，别沿河绕。柳巷那边还在挖水管，路灯也关了。</p>" },
      ],
    },
    waterJune: {
      category: "生活互助",
      title: "【旧帖】柳巷西段 6 月 16 日晚临时停水",
      author: "自来水值班",
      date: "2026-06-16 19:05",
      posts: [
        { name: "自来水值班", role: "认证账号", avatar: "水", floor: "楼主", date: "2026-06-16 19:05", body: "<p>柳巷西段主管突发漏水，现已停水抢修，预计二十三时前恢复。抢修点位于北桥至老汽车站之间，请过往车辆绕行。</p>" },
        { name: "一叶小舟", role: "注册会员", avatar: "舟", floor: "# 2", date: "2026-06-16 21:48", body: "<p>水还没来。刚从北桥把我姐接回家，她坐车坐得脸都白了。谁家方便借一壶热水？明早我送壶回来。</p>" },
        { name: "桂花婶", role: "老巷友", avatar: "桂", floor: "# 3", date: "2026-06-16 22:01", body: "<p>送到了。你们姐弟先吃饭，水壶不用急着还。</p>" },
      ],
    },
  };
  const PLAIN_TOPICS = [
    { category: "青河杂谈", title: "早市那家豆浆摊搬到哪里去了？", author: "桂花婶", replies: "23" },
    { category: "青河杂谈", title: "南门桥头的棋摊，下午还摆不摆？", author: "河西路口", replies: "11" },
    { category: "青河杂谈", title: "县医院的夜班车改点了，有谁清楚？", author: "北桥老周", replies: "8" },
    { category: "青河杂谈", title: "今年中秋街上还挂不挂灯笼？", author: "小满", replies: "31" },
    { category: "乡土民俗", title: "柳娘娘的生辰到底是哪天？", author: "守灯等雨", replies: "47" },
    { category: "乡土民俗", title: "请问「还愿」是不是只能本人来？", author: "路过人", replies: "19" },
    { category: "乡土民俗", title: "老辈人说红纸要写本名，有讲究吗？", author: "阿远家的", replies: "26" },
    { category: "生活互助", title: "谁有修伞师傅的电话？巷口的搬走了", author: "旧收音机", replies: "14" },
    { category: "生活互助", title: "明天去县里，有人要捎东西吗？", author: "河西路口", replies: "9" },
    { category: "生活互助", title: "二手缝纫机转让，南门自取", author: "巷尾裁缝", replies: "6" },
    { category: "旧城相册", title: "1980 年代的柳巷口，是这个样子吗？", author: "青河影像志", replies: "52" },
    { category: "旧城相册", title: "我家的老照片翻拍了几张", author: "小满", replies: "17" },
    { category: "旧城相册", title: "旧码头最后一条船，谁还有照片？", author: "守灯等雨", replies: "38" },
    { category: "社区事务", title: "巷口路灯坏了三天，报修找谁？", author: "北桥老周", replies: "7" },
    { category: "社区事务", title: "秋后大扫除的通知贴出来了吗？", author: "街道值班", replies: "12" },
    { category: "社区事务", title: "关于规范还愿登记的几点说明", author: "站务组", replies: "33" },
  ];
  const $ = (selector, root = document) => root.querySelector(selector);
  const icon = (name) => `<i data-lucide="${name}"></i>`;
  const escape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );
  const fresh = () => ({
    version: 1,
    view: "home",
    page: "first",
    category: "",
    topic: "",
    phoneTab: "chat",
    unlocked: false,
    transcript: false,
    showHidden: false,
    diaryOrder: [],
    diaryRestored: false,
    compare: false,
    annotations: [],
    codexRevealed: false,
    unfolded: false,
    drawerOpen: false,
    keeperUnfold: false,
    topicReads: [],
    clues: [],
    forumBookmarks: [],
    forumReplies: [],
    ending: null,
    reduced: matchMedia("(prefers-reduced-motion: reduce)").matches,
    notified: [],
    visits: 0,
  });
  let state = fresh();
  let toastTimer;
  let searchMessage = "";
  let diaryMessage = "";
  let profileSearchMessage = "";
  let openedFrom;
  let renderedPosts = new Map();
  const main = $("#main");
  const modal = $("#modal");

  try {
    const data = JSON.parse(localStorage.getItem(KEY));
    if (data && data.version === 1) {
      state.view = VIEWS.includes(data.view) ? data.view : "home";
      state.page = Object.hasOwn(STORY.pages, data.page) ? data.page : "first";
      state.category = typeof data.category === "string" ? data.category : "";
      state.topic = Object.hasOwn(TOPICS, data.topic) ? data.topic : "";
      state.phoneTab = ["chat", "photo", "files"].includes(data.phoneTab) ? data.phoneTab : "chat";
      ["unlocked", "transcript", "showHidden", "diaryRestored", "compare", "codexRevealed", "unfolded", "drawerOpen", "keeperUnfold", "reduced"].forEach((key) => {
        if (typeof data[key] === "boolean") state[key] = data[key];
      });
      state.diaryOrder = Array.isArray(data.diaryOrder) ? data.diaryOrder.filter((key, index, items) => ["a", "b", "c", "d"].includes(key) && items.indexOf(key) === index).slice(0, 4) : [];
      state.clues = CLUES.filter((key) => Array.isArray(data.clues) && data.clues.includes(key));
      state.forumBookmarks = Array.isArray(data.forumBookmarks) ? data.forumBookmarks.filter((item) => item && typeof item.id === "string" && typeof item.author === "string" && typeof item.excerpt === "string").slice(0, 100).map((item) => ({ id: item.id.slice(0, 80), author: item.author.slice(0, 40), floor: String(item.floor || "").slice(0, 40), excerpt: item.excerpt.slice(0, 240) })) : [];
      state.forumReplies = Array.isArray(data.forumReplies) ? data.forumReplies.filter((item) => item && typeof item.id === "string" && typeof item.rootId === "string" && typeof item.text === "string").slice(0, 100).map((item) => ({ id: item.id.slice(0, 80), rootId: item.rootId.slice(0, 80), replyTo: String(item.replyTo || "楼主").slice(0, 40), text: item.text.slice(0, 500) })) : [];
      state.topicReads = ["returnTrip", "waterJune"].filter((key) => Array.isArray(data.topicReads) && data.topicReads.includes(key));
      state.annotations = ["return", "name"].filter((key) => Array.isArray(data.annotations) && data.annotations.includes(key));
      state.notified = ["work", "mother", "bank", "landlord", "colleague"].filter((key) => Array.isArray(data.notified) && data.notified.includes(key));
      state.visits = typeof data.visits === "number" ? data.visits : 0;
      if (["settled", "extended", "recorded"].includes(data.ending) && state.clues.includes("contract")) state.ending = data.ending;
      if (state.view === "contract" && !state.clues.includes("photo")) state.view = "ledger";
    }
  } catch {}

  function icons() {
    if (window.lucide) window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
  }
  function has(clue) { return state.clues.includes(clue); }
  function hasForumBookmark(id) { return id === "wish-found-0" ? has("wish") : state.forumBookmarks.some((item) => item.id === id); }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
  }
  function toast(message) {
    clearTimeout(toastTimer);
    $("#toast").textContent = message;
    $("#toast").classList.add("visible");
    toastTimer = setTimeout(() => $("#toast").classList.remove("visible"), 3500);
  }
  function notify(id, sender, title, text) {
    if (state.notified.includes(id)) return;
    state.notified.push(id);
    const target = $("#notification");
    target.innerHTML = `<div><span>${sender} · 刚刚</span><button class="icon-btn" data-action="dismiss-notification" aria-label="收起通知" title="收起通知">${icon("x")}</button></div><strong>${title}</strong><p>${text}</p>`;
    target.hidden = false;
    save();
    icons();
  }
  function collect(clue) {
    if (has(clue)) return;
    state.clues.push(clue);
    save();
    updateChrome();
    toast(`已加入收藏：${STORY.clues[clue].title}`);
  }
  function updateChrome() {
    const count = state.clues.length;
    const settled = state.ending === "settled";
    const visibleCount = settled ? 0 : count + state.forumBookmarks.length;
    document.body.classList.toggle("altered", has("ledger"));
    document.body.classList.toggle("settled", state.ending === "settled");
    document.body.classList.toggle("recorded", state.ending === "recorded");
    document.body.classList.toggle("reduced-motion", state.reduced);
    $("#clue-count").textContent = visibleCount;
    $("#story-date").textContent = state.ending ? "2026 年 9 月 15 日" : "2026 年 9 月 14 日";
    const identityEl = $("#identity");
    if (identityEl) identityEl.textContent = state.ending === "settled" ? "家中独女" : has("ledger") && !has("photo") ? "亲属关系待核" : "林舟的姐姐";
    $("#online-count").textContent = `在线：${has("ledger") ? "16" : "17"} 人`;
    $("#site-notice").textContent = state.ending === "settled" ? "本日愿事已毕。诸位安心歇息，明日照常开帖。" : has("ledger") ? "所愿既应，所欠应还。近亲可以代签，请勿将已交割项目重复申报。" : "巷里有棵老柳树，来去都是有缘人。请文明交流，勿重复许愿。";
    document.querySelectorAll(".board-nav button").forEach((button) => {
      const homeActive = state.view === "home" && !state.category;
      const categoryActive = state.view === "home" && state.category === button.dataset.category;
      button.classList.toggle("active", button.dataset.action === "home" ? homeActive : categoryActive);
    });
    icons();
  }
  function render(scroll = false) {
    updateChrome();
    renderedPosts = new Map();
    if (state.ending && state.view !== "profile") main.innerHTML = renderEnding();
    else main.innerHTML = { home: renderHome, forum: renderForum, topic: renderTopic, lostfound: renderLostFound, phone: renderPhone, diary: renderDiary, gazette: renderGazette, codex: renderCodex, ledger: renderLedger, contract: renderContract, drawer: renderDrawer, keeper: renderKeeper, evidence: renderEvidence, profile: renderProfile }[state.view]();
    icons();
    if (scroll) {
      const top = main.getBoundingClientRect().top + window.scrollY - 18;
      window.scrollTo({ top, behavior: "instant" });
      main.focus({ preventScroll: true });
    }
  }
  function navigate(view) {
    if (state.ending) { toast("本页已经归档。"); return; }
    state.view = view;
    save();
    render(true);
  }
  function renderHome() {
    if (state.category) return renderBoard(state.category);
    const boards = [
      ["青河杂谈", "县城见闻、街巷消息和日常闲谈", "5,806", "公交 3 路下周改线", "河西路口"],
      ["乡土民俗", "节气、旧俗、方言与地方掌故", "1,904", "【愿望柳】留一句心愿", "守柳人"],
      ["生活互助", "寻物、问路、二手与邻里求助", "3,512", "南门片区今晚水压很小", "桂花婶"],
      ["旧城相册", "老街、旧码头与家庭影像", "986", "征集青河老街照片", "青河影像志"],
      ["社区事务", "通知、公约、投诉与意见反馈", "278", "柳巷口井盖已临时围住", "街道值班"],
    ];
    return `<section class="home-block"><div class="feature-news"><div class="feature-lead"><h2><button data-action="open-topic" data-topic="bus">北桥施工，本周三晚起部分路段临时管制</button></h2><p>交警提醒：文化路至老汽车站方向请绕行滨河路。公交 3 路、7 路临时站点同时调整。</p></div><ul class="headline-list"><li><button data-action="open-topic" data-topic="water">南门片区今晚水压很小</button><time>22:07</time></li><li><button data-action="open-topic" data-topic="photos">文化馆征集青河老街旧照片</button><time>09-12</time></li><li><button data-action="open-topic" data-topic="school">实验小学旧校门开始修缮</button><time>09-13</time></li><li><button data-action="open-topic" data-topic="rain">夜雨路滑，柳巷口井盖已围住</button><time>22:52</time></li></ul></div></section>
      <section class="home-block"><div class="home-title"><h2>论坛版块</h2><span>今日：473　昨日：629</span></div><table class="board-table"><colgroup><col class="board-icon"><col><col class="table-number"><col class="table-last"></colgroup><thead><tr><th></th><th>版块</th><th>主题</th><th>最后发表</th></tr></thead><tbody>${boards.map(([name, desc, number, last, author]) => `<tr><td class="board-icon">${icon(name === "乡土民俗" ? "leaf" : name === "旧城相册" ? "image" : name === "生活互助" ? "hand-heart" : name === "社区事务" ? "clipboard-list" : "message-square")}</td><td class="board-name"><strong><button data-action="category" data-category="${name}">${name}</button></strong><small>${desc}</small></td><td class="table-number">${number}</td><td class="table-last">${last}<br>${author}　23:02</td></tr>`).join("")}</tbody></table></section>
      <section class="home-block"><div class="home-title"><h2>最新主题</h2><span>按最后回复时间</span></div>${renderTopicTable(["wish", "rain", "water", "bus", "photos", "school"], [PLAIN_TOPICS[0], PLAIN_TOPICS[4], PLAIN_TOPICS[7], PLAIN_TOPICS[10]].map(renderPlainTopicRow).join(""))}</section>`;
  }
  function topicInfo(key) {
    if (key === "wish") return { category: "乡土民俗", title: "【愿望柳】留一句心愿，等一阵好风", author: "守柳人", date: "今天 23:02", replies: "3,287", sticky: true };
    const topic = TOPICS[key];
    return { ...topic, replies: { bus: "47", photos: "128", water: "20", school: "34", rain: "8", rules: "61", lost: "12", returnTrip: "2", waterJune: "2" }[key] || "0", sticky: key === "rules" };
  }
  function renderTopicTable(keys, extraRows = "") {
    return `<table class="topic-table"><colgroup><col class="topic-kind"><col><col class="topic-replies"><col class="topic-last"></colgroup><thead><tr><th>类型</th><th>主题</th><th>回复</th><th>最后发表</th></tr></thead><tbody>${keys.map((key) => { const topic = topicInfo(key); return `<tr><td class="topic-kind"><span class="${topic.sticky ? "sticky" : ""}">${topic.sticky ? "置顶" : "主题"}</span></td><td class="topic-name"><strong><button data-action="open-topic" data-topic="${key}">${topic.title}</button></strong><small>${topic.author}　${topic.date}</small></td><td class="topic-replies">${topic.replies}</td><td class="topic-last">${key === "wish" ? "守柳人" : topic.author}<br>${topic.date}</td></tr>`; }).join("")}${extraRows}</tbody></table>`;
  }
  function renderPlainTopicRow(item) {
    return `<tr class="plain-topic"><td class="topic-kind"><span>主题</span></td><td class="topic-name"><strong>${item.title}</strong><small>${item.author}　2026-09</small></td><td class="topic-replies">${item.replies}</td><td class="topic-last">${item.author}<br>2026-09</td></tr>`;
  }
  function renderBoard(category) {
    const keys = { "青河杂谈": ["bus", "school"], "乡土民俗": ["wish"], "生活互助": ["water", "lost"], "旧城相册": ["photos"], "社区事务": ["rules", "rain"] }[category] || ["bus", "water", "photos"];
    const plain = PLAIN_TOPICS.filter((item) => item.category === category).map((item) => renderPlainTopicRow(item)).join("");
    return `${crumb(category)}<section class="home-block"><div class="panel-title"><h2>${category}</h2><span>版主：${category === "乡土民俗" ? "守柳人" : "青河站务"}</span></div>${renderTopicTable(keys, plain)}</section>`;
  }
  function renderTopic() {
    const topic = TOPICS[state.topic] || TOPICS.bus;
    const image = topic.image ? '<img class="thread-photo" src="assets/street-dock.jpg" alt="青河老街与旧码头，摄于 2014 年">' : "";
    const defaultPosts = [
      { name: topic.author, role: "注册会员", avatar: topic.author.slice(0, 1), floor: "楼主", date: topic.date, body: `<p>${topic.body}</p>${image}` },
      { name: state.topic === "photos" ? "晚来风" : "青河老住户", role: "注册会员", avatar: state.topic === "photos" ? "晚" : "青", floor: "# 2", date: "2026-09-14 22:18", body: `<p>${topic.reply}</p>` },
    ];
    const posts = topic.posts || [...defaultPosts, ...(topic.extraPosts || [])];
    const lastPost = posts[posts.length - 1];
    const archiveNote = ["returnTrip", "waterJune"].includes(state.topic) ? '<span class="archive-label">论坛历史快照 · 只读</span>' : "";
    return `${crumb(`${topic.category} / 主题`)}<div class="thread-heading"><div>${archiveNote}<h2>${topic.title}</h2><div class="thread-meta">${topic.author}　发表于 ${topic.date}</div></div><div class="thread-stats"><div><b>${posts.length + state.forumReplies.filter((reply) => reply.rootId.startsWith(`topic-${state.topic}-`)).length}</b><small>回帖</small></div><div><b>${topic.posts ? "31" : "86"}</b><small>浏览</small></div></div></div><div class="thread-tools"><button class="command secondary" data-action="${topic.posts ? "profile" : "category"}" ${topic.posts ? "" : `data-category="${topic.category}"`}>${icon("arrow-left")}${topic.posts ? "返回历史发言" : "返回版块"}</button></div>${posts.map((post, index) => renderPost(post, `topic-${state.topic}-${index}`)).join("")}<div class="thread-bottom"><span>本主题最后回复于 ${lastPost.date}</span><button data-action="${topic.posts ? "profile" : "home"}">${topic.posts ? "返回晚来风的个人页" : "返回论坛首页"}</button></div>`;
  }
  const crumb = (text) => `<div class="breadcrumb"><button data-action="home">柳巷论坛</button>${icon("chevron-right")}<span>${text}</span></div>`;
  const heading = (category, title, subtitle) => `${crumb(category)}<div class="view-heading"><span class="eyebrow">${category}</span><h2>${title}</h2><p>${subtitle}</p></div>`;
  function renderForum() {
    const pages = [["first", "1"], ["old", "173"], ["found", "325"], ["recent", "329"]];
    const pageLabels = { first: "2009 年 · 这张帖子刚开始的时候", old: "2015 年 · 新春还愿", recent: "最近的回帖", found: "2026 年 6 月 · 找到一叶小舟" };
    let posts = STORY.pages[state.page];
    const replyCount = (3287 + state.forumReplies.filter((reply) => reply.rootId.startsWith("wish-")).length).toLocaleString("en-US");
    return `${crumb("本地民俗 / 愿望柳")}
      <div class="thread-heading"><div><div class="thread-tags"><span>置顶</span><span>精华</span><span>民间习俗</span></div><h2>【愿望柳】留一句心愿，等一阵好风</h2><div class="thread-meta">守柳人　发表于 2009-04-05　<span>·</span>　最后回复：今天 23:02</div></div><div class="thread-stats"><div><b>${replyCount}</b><small>回帖</small></div><div><b>16.8万</b><small>浏览</small></div></div></div>
      <div class="thread-tools"><div class="pagination">${pages.map(([key, label], i) => `${i === 1 ? "<span>…</span>" : ""}<button data-action="page" data-page="${key}" class="${state.page === key ? "active" : ""}" aria-label="第 ${label} 页" ${state.page === key ? 'aria-current="page"' : ""}>${label}</button>${i === 1 ? "<span>…</span>" : ""}`).join("")}</div><form class="thread-search" id="search-form"><input aria-label="在本帖中查找" id="search-input" type="search" placeholder="用户名 / 姓名 / 楼层" maxlength="60" autocomplete="off"><button aria-label="搜索帖子" title="搜索帖子">${icon("search")}</button></form></div>
      <div class="result-info" role="status">${searchMessage ? escape(searchMessage) : pageLabels[state.page]}</div>
      ${posts.map((post, index) => renderPost(post, `wish-${state.page}-${index}`)).join("")}
      <div class="thread-bottom"><span>${state.page === "recent" && has("contract") && !has("lostFolks") ? "你盯着这些还愿的回帖，突然觉得哪里不对劲。" : state.page === "recent" && has("lostFolks") ? "你已看清：这些人，都少了一块。" : "本帖始于 2009 年，至今仍有乡亲归来。"}</span>${state.page === "recent" && has("contract") && !has("lostFolks") ? '<button class="command" data-action="keep-lost">察觉到了什么，记下来</button>' : state.page !== "recent" ? '<button class="text-button" data-action="page" data-page="recent">查看最新回帖 →</button>' : ""}</div>
      ${state.page === "found" && has("voice") ? `<div class="block-action"><p>林舟在转写里提到，抽屉最底下有张折起来的红纸。</p><button class="command secondary" data-action="open-drawer">去翻父母的老抽屉</button></div>` : ""}`;
  }
  function htmlToText(html) {
    const node = document.createElement("div");
    node.innerHTML = html;
    return (node.textContent || "").replace(/\s+/g, " ").trim();
  }
  function postActions(meta) {
    const saved = hasForumBookmark(meta.id);
    const locked = meta.id === "wish-found-0" && saved;
    return `<div class="post-actions">${meta.readOnly ? '<span class="post-readonly">历史主题不可回复</span>' : `<button data-action="reply-post" data-post-id="${escape(meta.id)}">${icon("reply")}回复</button>`}<button data-action="favorite-post" data-post-id="${escape(meta.id)}" class="${saved ? "saved" : ""}" aria-pressed="${saved}" ${locked ? "disabled" : ""}>${icon(saved ? "bookmark-check" : "bookmark")}${saved ? "已收藏" : "收藏"}</button></div>`;
  }
  function renderForumReplies(rootId) {
    const replies = state.forumReplies.filter((reply) => reply.rootId === rootId);
    if (!replies.length) return "";
    return `<section class="forum-followups" aria-label="玩家跟帖">${replies.map((reply, index) => {
      const meta = { id: reply.id, rootId, author: "晚来风", floor: `跟帖 ${index + 1}`, excerpt: reply.text };
      renderedPosts.set(meta.id, meta);
      return `<article class="post user-reply" data-post-id="${escape(meta.id)}"><div class="post-author"><span class="avatar me">晚</span><strong>晚来风</strong><small>注册会员</small></div><div class="post-content"><div class="post-meta"><span>回复 ${escape(reply.replyTo)} · 刚刚</span><span>${escape(meta.floor)}</span></div><div class="post-body"><p>${escape(reply.text).replace(/\n/g, "<br>")}</p></div>${postActions(meta)}</div></article>`;
    }).join("")}</section>`;
  }
  function renderPost(post, id) {
    let body = post.body;
    if (has("ledger") && id === "wish-found-0")
      body = '<p><strong>[ 该用户不存在 ]</strong></p><p>愿一个重要的人过得好。</p><p>愿望灵验之后，我会回来还愿。</p><div class="receipt-strip">自留凭单　<strong>LX0617</strong>　<span>待还</span></div><p class="deleted-line">[ 本帖经系统整理于 23:41 ]</p>';
    if (has("ledger") && post.name === "巷尾裁缝" && state.page === "recent")
      body = '<p>南边林家那个姑娘回来了。看着气色不错。</p><p>记错了，是她帮我搬的缝纫机。林家哪有什么男孩子。</p><p class="deleted-line">[ 编辑于 23:41 ]</p>';
    const meta = { id, rootId: id, author: post.name, floor: post.floor, excerpt: htmlToText(body).slice(0, 240), readOnly: /^topic-(returnTrip|waterJune)-/.test(id) };
    renderedPosts.set(id, meta);
    return `<article class="post ${post.tone || ""}" data-post-id="${escape(id)}"><div class="post-author"><span class="avatar">${post.avatar}</span><strong>${post.name}</strong><small>${post.role}</small>${post.tone === "keeper" ? '<span class="role-tag">版主</span>' : ""}</div><div class="post-content"><div class="post-meta"><span>发表于 ${post.date}</span><span>${post.floor}</span></div><div class="post-body">${body}</div>${postActions(meta)}</div></article>${renderForumReplies(id)}`;
  }
  function renderLostFound() {
    const phoneItem = has("wish") ? `<article class="lost-item featured"><div class="lost-icon">${icon("smartphone")}</div><div><span class="lost-status">待家属确认</span><h3>黑色旧手机</h3><p>磨损保护壳，屏幕仍有电。物品登记显示，它是在林舟房间的枕头下找到的。</p><small>登记时间：2026-09-14 · 暂存：社区服务站</small></div><button class="command" data-action="open-phone">${icon("external-link")}查看林舟的旧手机</button></article>` : "";
    return `${heading("生活互助 / 失物招领", "本周失物招领", "认领时请说明物品特征；涉及个人设备的物品，仅向有据亲属开放")}
      <section class="lost-found-list">${phoneItem}<article class="lost-item"><div class="lost-icon">${icon("key-round")}</div><div><span class="lost-status">待认领</span><h3>一串钥匙</h3><p>银色钥匙三把，挂有褪色公交卡套。在文化路北口捡到。</p><small>登记时间：2026-09-14 · 编号 LF-0914-03</small></div></article><article class="lost-item"><div class="lost-icon">${icon("badge")}</div><div><span class="lost-status">待认领</span><h3>学生卡</h3><p>蓝色透明卡套，背面贴有一枚小星星贴纸。在北桥公交站捡到。</p><small>登记时间：2026-09-14 · 编号 LF-0914-07</small></div></article></section>`;
  }
  function renderPhone() {
    const title = heading("个人物品 / 林舟的旧手机", "屏幕还亮着。", "在弟弟的枕头下面找到的。电量一直停在 17%。");
    let body;
    if (!state.unlocked)
      body = `<div class="lock-screen"><div class="lock-time">00:16</div><p>6 月 17 日　星期三</p>${icon("lock-keyhole")}<form id="unlock-form"><label for="pin">输入四位数字密码</label><div class="pin-row"><input id="pin" type="password" inputmode="numeric" maxlength="4" autocomplete="off" aria-describedby="pin-error"><button class="command" aria-label="解锁手机" title="解锁手机">${icon("arrow-right")}</button></div><p class="inline-error" id="pin-error" role="status"></p></form><p class="lock-note">“姐，密码还是你上次回来那天。”</p>${has("homeDate") ? '<p class="lock-source">站内记录已核对：她在 6 月 16 日从北桥回到柳巷。</p>' : `<button class="text-button lock-investigate" data-action="profile">${icon("search")}查找她的历史发言</button>`}</div>`;
    else
      body = `<div class="phone-title"><span>${state.phoneTab === "chat" ? "姐姐" : state.phoneTab === "photo" ? "旧相册" : "本地文件"}</span><small>无网络连接</small></div><div class="phone-tabs" role="tablist" aria-label="旧手机内容">${[["chat", "message-circle", "消息"], ["photo", "images", "相册"], ["files", "folder-closed", "文件"]].map(([key, ic, label]) => `<button role="tab" id="phone-tab-${key}" aria-controls="phone-panel" tabindex="${state.phoneTab === key ? "0" : "-1"}" aria-selected="${state.phoneTab === key}" data-action="phone-tab" data-tab="${key}" class="${state.phoneTab === key ? "active" : ""}">${icon(ic)}${label}</button>`).join("")}</div><div class="phone-body" id="phone-panel" role="tabpanel" aria-labelledby="phone-tab-${state.phoneTab}">${state.phoneTab === "chat" ? phoneChat() : state.phoneTab === "photo" ? phonePhoto() : phoneFiles()}</div>`;
    return `${title}<div class="phone-layout"><div class="phone"><div class="phone-screen"><div class="phone-status"><span>无 SIM 卡</span><span>00:16</span><span>17%　▰</span></div>${body}</div></div><div class="phone-aside"><h3>他把手机留给了我。</h3><p>${has("ledger") ? "我刚才明明看见，照片里有两个人。<br><br>我不该相信更新后的那一张。" : "充电线还插在床头。壳角磕掉了一块，是去年冬天留下的。<br><br>他带走了外套，没带钥匙。"}</p><p class="tiny">物品记录 / 09.14<br>黑色旧手机，磨损保护壳。<br>找到时处于飞行模式。</p></div></div>`;
  }
  function phoneChat() {
    const changed = has("ledger");
    return `<div class="chat-date">6 月 16 日　21:37</div><div class="chat-message"><span class="avatar">晚</span><div><small>姐姐</small><p class="bubble">我到家了。你那件蓝外套还在阳台，睡前记得收。</p></div></div><div class="chat-message sent"><span class="avatar">舟</span><div><small>林舟</small><p class="bubble">知道。你先睡。</p></div></div><div class="chat-date">6 月 17 日　00:16</div><button class="message-attachment" data-action="transcript">${icon("file-audio")}<span>00:47 · 未发送的语音<small>本地转写附件 ${state.transcript ? "· 已展开" : "· 未读"}</small></span>${icon("chevron-down")}</button>${state.transcript ? `<div class="transcript">${STORY.transcript.map((line) => `<p>${line}</p>`).join("")}</div><button class="command secondary" data-action="keep-voice">${icon(has("voice") ? "book-open" : "notebook-pen")}${has("voice") ? "查看青河县志" : "留存这份转写"}</button>` : '<p class="pending-line">发送失败。原语音数据不完整，本地转写已保存。</p>'}${changed ? `<div class="chat-date">6 月 17 日　00:19</div><div class="chat-message sent"><span class="avatar">舟</span><div><small>林舟</small><p class="bubble">${has("photo") ? "姐，你在看我吗。" : "姐。"}</p></div></div>` : ""}`;
  }
  function phonePhoto() {
    const changed = has("ledger");
    return `<div class="photo-caption"><span>IMG_20140823_02.jpg</span><span>2 / 17</span></div><div class="photo-frame"><img src="assets/${changed ? "photo-alone" : "photo-both"}.jpg" alt="${changed ? "更新后的照片：林晚独自站在石栏前" : "2014 年河边旧照，姐弟俩站在石栏前"}">${changed && state.compare ? '<div class="cache-layer"><img src="assets/photo-both.jpg" alt="旧缓存里仍有林舟和蓝色纸风车"></div><div class="compare-line"></div>' : ""}<span class="photo-stamp">2014.08.23</span></div><div class="photo-footer"><span>2014 / 08 / 23　16:42</span><span>2.31 MB</span></div>${changed ? `<p class="photo-note">${state.compare ? "缓存还没被覆盖。左边的人，仍然在那里。" : has("photo") ? "你已经核对过了。可每次再看，都像在看一张越来越旧的照片。" : "文件名没变。拍摄时间没变。<br>石栏前面，只剩我一个人。"}</p><button class="text-button" data-action="compare">${icon("history")}${state.compare ? "收起旧缓存" : "打开旧缓存对照"}</button>${state.compare ? `<div class="compare-tools"><label for="photo-compare">缓存对照</label><input id="photo-compare" type="range" min="0" max="100" value="50" aria-label="旧缓存显示比例"><div class="compare-labels"><span>左：旧缓存</span><span>右：当前文件</span></div><div class="cache-metadata"><span>原始备注</span><strong>舟和姐，河边</strong><small>仅保存在本机缓存 · 未同步</small></div></div>${has("photo") ? '<div class="pending-line">已核对：左侧，蓝色纸风车。他叫林舟。</div><div class="block-action"><button class="command" data-action="open-contract">查看他的原契</button></div>' : `<form class="photo-question" id="photo-form"><p>把还记得的东西写下来。</p><label for="photo-side">林舟在照片里的位置</label><select id="photo-side" required><option value="">请选择</option><option value="left">姐姐左侧（画面左侧）</option><option value="right">姐姐右侧（画面右侧）</option><option value="behind">姐姐身后</option></select><label for="photo-object">他手里拿着什么</label><select id="photo-object" required><option value="">请选择</option><option value="red">红色许愿纸</option><option value="blue">蓝色纸风车</option><option value="key">一串钥匙</option></select><p class="inline-error" id="photo-error" role="status"></p><button class="command">${icon("notebook-pen")}留存这段记忆</button></form>`}` : ""}` : '<p class="photo-note">那年他十一岁。非要带着刚买的纸风车拍照，举了一路，风车却一次也没转。</p><p class="pending-line">文件完整。最近修改：2014 / 08 / 23。</p>'}`;
  }
  function phoneFiles() {
    const visibleFiles = has("voice") ? 3 : 2;
    return `<ul class="files-list"><li><strong>愿望柳_凭单.txt</strong><small>最后编辑：6 月 17 日 00:17</small><p class="bubble">LX0617<br>只认本名。存根勿失。</p></li><li><strong>未命名备忘</strong><small>最后编辑：6 月 17 日 00:19</small><p class="bubble">她睡着之后，我把桌上的碗收了。<br>明天不要叫醒她。</p></li>${has("voice") ? '<li><strong>给姐的话（草稿）</strong><small>最后编辑：6 月 17 日 00:20</small><p class="bubble">抽屉里的红纸，别让爸妈看见。<br>他们以为那件事，我不记得。</p></li>' : ""}${state.showHidden ? `<li class="hidden-file"><strong>._drafts.bin</strong><small>已删除 · 索引仍占用 12 KB</small><p>检测到 4 个未覆盖的文本片段。</p><button class="command secondary" data-action="open-diary">${icon("file-clock")}恢复临时文件</button></li>` : ""}</ul><div class="storage-audit"><span>${visibleFiles} 个可见文件 · 存储索引 ${visibleFiles + 1} 项</span><button class="text-button" data-action="toggle-hidden">${icon(state.showHidden ? "eye-off" : "eye")}${state.showHidden ? "隐藏系统项目" : "显示隐藏项目"}</button></div><p class="pending-line">云端备份不可用。本机索引与文件数量不一致。</p>`;
  }
  function renderDiary() {
    const fragments = STORY.diaryFragments;
    const correctOrder = ["a", "c", "b", "d"];
    if (state.diaryRestored) {
      return `${heading("旧手机 / 存储分析 / .drafts", "四页被删除的日记", "恢复完成 · 修改时间来自文件内容，系统时间戳已经损坏")}
        <div class="recovery-window restored-diary"><div class="recovery-toolbar"><span>${icon("hard-drive-download")}4 / 4 个片段已重组</span><span>只读恢复</span></div><div class="diary-pages">${correctOrder.map((key, index) => { const item = fragments[key]; return `<article class="diary-page"><header><span>第 ${index + 1} 页</span><time>${item.date}</time></header><h3>${item.title}</h3><p>${item.text}</p></article>`; }).join("")}</div><div class="block-action"><p>${has("diary") ? "日记和原始签名已经留存在收藏中。" : "最后一页不是遗书。是他给记录留下的退路。"}</p><button class="command" data-action="keep-diary">${icon(has("diary") ? "book-open" : "notebook-pen")}${has("diary") ? "去核对县志" : "留存恢复记录"}</button></div></div>`;
    }
    const selected = state.diaryOrder;
    const tray = ["b", "a", "d", "c"];
    return `${heading("旧手机 / 存储分析 / .drafts", "四个时间戳损坏的片段", "按内容里的日期和前后关系，还原林舟最后四天的记录")}
      <div class="recovery-window"><div class="recovery-toolbar"><span>${icon("file-warning")}._drafts.bin</span><span>完整度 83%</span></div><p class="recovery-instruction">依次点选：从最早的一页，到最后的一页。</p><div class="fragment-grid">${tray.map((key) => { const item = fragments[key]; const used = selected.includes(key); return `<button class="fragment-card ${used ? "selected" : ""}" data-action="diary-piece" data-piece="${key}" ${used ? "disabled" : ""}><span>${used ? "已选" : "未排序片段"}</span><strong>${item.date}</strong><p>${item.text}</p></button>`; }).join("")}</div><div class="recovery-sequence" aria-label="当前恢复顺序">${[0, 1, 2, 3].map((index) => selected[index] ? `<span><b>${index + 1}</b>${fragments[selected[index]].date}</span>` : `<span class="empty"><b>${index + 1}</b>等待片段</span>`).join("")}</div><p class="inline-error" role="status">${diaryMessage}</p><div class="recovery-actions"><button class="command secondary" data-action="reset-diary" ${selected.length ? "" : "disabled"}>${icon("rotate-ccw")}重新排序</button><button class="command" data-action="restore-diary" ${selected.length === 4 ? "" : "disabled"}>${icon("combine")}按此顺序恢复</button></div></div>`;
  }
  function renderGazette() {
    const returning = state.annotations.includes("return");
    const naming = state.annotations.includes("name");
    return `${heading("地方文献 / 卷七", "青河县志", "民国二十一年重修本 · 民俗 / 柳祠 · 数字化残页")}
      <div class="gazette-toolbar"><span>QH-1932-07 / 馆藏影印</span><span>119 / 246</span></div><article class="gazette-paper"><div class="volume">青 河 县 志　·　卷 七　·　祠 祀</div><h3>柳祠</h3><div class="gazette-text"><p>县西旧柳，围三人，腹空而不枯。乡人有愿，书名于朱笺，纳之木腹。远行者托人录之，亦应。</p><p>所求不取财帛，唯取所系。系者，彼此相认之因也。愿愈遂，系愈薄。</p><p><button class="annotation" data-action="annotation" data-note="return" aria-expanded="${returning}">所谓还愿，还，归也。</button>非酬谢之谓，乃使所系悉归柳下，自此无欠。</p><p><button class="annotation" data-action="annotation" data-note="name" aria-expanded="${naming}">录名须用初生之名。</button>号与别称，皆不足凭。持名与存根，得见原契。</p></div>${returning ? '<div class="annotation-note"><strong>铅笔边注 · 字迹较新</strong><br>“不是回来感谢它，是把抵押给它的东西还回去。每一条还愿的回帖，都是收条。”</div>' : ""}${naming ? '<div class="annotation-note"><strong>页脚旁注</strong><br>“查账用许愿人的出生本名和自留凭单。认亲另须旧事为证，柳下不认自称。”</div>' : ""}<div class="page-number">一一九</div></article>
      <div class="block-action"><p>${returning && naming ? "两个“还”字，从来不是一个意思。" : "字句下面有两处铅笔划痕。"}</p><button class="command" data-action="keep-terms" ${!returning || !naming ? "disabled" : ""}>${icon(has("terms") ? "scroll-text" : "notebook-pen")}${has("terms") ? "查看早期抄本" : "留存这两处边注"}</button></div>${has("terms") ? `<div class="catalog-alert"><div>${icon("library")}<span><strong>同条目另有早期抄本</strong><small>《柳祠香会簿》光绪二年抄本，系统标注与重修本文字不一致。</small></span></div><button class="command secondary" data-action="open-codex">查看异文</button></div>` : ""}<p class="quiet-note">${has("voice") ? "他说：“你比我会读书。”<br>可他签下去的时候，也以为自己读懂了。" : "纸张已经很旧了。边注的笔迹，却像是不久前留下的。"}</p>`;
  }
  function renderCodex() {
    const revealed = state.codexRevealed;
    return `${heading("地方文献 / 特藏校勘", "《柳祠香会簿》异文", "光绪二年抄本 · 与民国二十一年重修本并读")}
      <div class="codex-toolbar"><div><span>馆藏号 QH-GJ-018</span><small>纸背墨迹淡化，建议调整图像对比度</small></div><span>叶 14b</span></div>
      <div class="codex-compare"><article class="codex-leaf"><header><span>光绪抄本</span><small>原叶影印</small></header><div class="vertical-copy"><p>凡愿既应<br>所系悉归</p><p class="faded-passage ${revealed ? "revealed" : ""}" id="codex-ink">惟有三人<br>各录其初名于异处<br>历一夕名不易<br>柳不得尽取</p><p>慎之慎之</p></div></article><article class="codex-transcript"><header><span>1932 重修本</span><small>第 119 页录文</small></header><p>凡愿既应，所系悉归。</p><p class="omission">〔下缺十二字，馆员注：虫蚀〕</p><p>慎之慎之。</p><div class="catalog-note"><strong>校勘备注</strong><p>抄本原叶没有破洞。缺字处可见淡墨，但数字化录文未收。</p></div></article></div>
      ${!revealed ? `<div class="contrast-tool"><label for="codex-contrast"><span>残墨对比度</span><output id="codex-contrast-value">0%</output></label><input id="codex-contrast" type="range" min="0" max="100" value="0"><button class="command" id="codex-fix" data-action="fix-codex" disabled>${icon("scan-text")}固定显影结果</button></div>` : `<form class="codex-question" id="codex-form"><h3>补录被删掉的旧例</h3><p>根据显影原叶，依次补齐三个关键位置。</p><div class="codex-blanks"><label>人数<select id="codex-count" required><option value="">选择</option><option value="one">一人</option><option value="three">三人</option><option value="seven">七人</option></select></label><label>所录之名<select id="codex-name" required><option value="">选择</option><option value="alias">论坛别号</option><option value="birth">初名</option><option value="kin">近亲姓名</option></select></label><label>记录位置<select id="codex-place" required><option value="">选择</option><option value="same">同处</option><option value="apart">异处</option><option value="willow">柳下</option></select></label></div><p class="inline-error" id="codex-error" role="status"></p><button class="command">${icon("text-cursor-input")}提交补录</button></form>`}
      ${has("codex") ? `<div class="block-action"><p>这一行不是教人把债还掉。它教人怎样不被写成从未存在。</p><button class="command secondary" data-action="open-resource" data-resource="ledger">去查林舟的账</button></div>` : ""}`;
  }
  function renderLedger() {
    if (!has("ledger"))
      return `${heading("站务 / 还愿登记", "愿有来处，账有归处。", "柳巷民俗事务登记 · 仅限本人及有据近亲查阅")}
      <div class="ledger-gate"><div class="ledger-seal">${icon("stamp")}</div><h3>凭单查验</h3><p>姓名不得有误。<br>已应之愿，不作未应登记。</p><form id="ledger-form"><div class="form-field"><label for="ledger-name">许愿人本名</label><input id="ledger-name" placeholder="初生之名" autocomplete="off" maxlength="12" required></div><div class="form-field"><label for="ledger-receipt">自留凭单</label><input id="ledger-receipt" placeholder="凭单编号" autocomplete="off" maxlength="16" required></div><p class="inline-error" id="ledger-error" role="status"></p><button class="command">${icon("key-round")}查验这笔愿望</button></form><p class="access-footnote">不另收香火钱。已交割之物，不予复原。<br>登记人：守柳人　/　本人余额：0</p></div>`;
    return `${heading("站务 / 还愿登记 / LX0617", "查到他了。", "登记时间：2026-06-17 00:17 · 状态最后更新：刚刚")}
      <article class="ledger-document"><header><div><h3>愿事因果兑付登记</h3><p>No. LX0617 / 原始凭单</p></div><span class="ledger-stamp">待交割</span></header><dl class="ledger-detail"><div><dt>许愿人</dt><dd>林舟</dd></div><div><dt>受益人</dt><dd>林晚</dd></div><div><dt>所愿</dt><dd>让姐姐林晚过得好</dd></div><div><dt>抵押</dt><dd>姐弟之间的因果</dd></div></dl><div class="table-wrap"><table class="ledger-table"><thead><tr><th>交割项目</th><th>对应所应</th><th>登记状态</th></tr></thead><tbody><tr><td>姐姐对弟弟近况的牵挂</td><td>整夜安眠</td><td class="state-tag">已交割</td></tr><tr><td>姐弟共同生活留下的痕迹</td><td>诸事顺遂</td><td class="state-tag">已交割</td></tr><tr><td>姐姐关于弟弟的全部童年记忆</td><td>此后无忧</td><td class="state-tag">待近亲签收</td></tr></tbody></table></div><p class="ledger-footnote">最后一笔尚未交割。近亲签收后，本凭单即结清。<br>本处所称“失联”，系抵押人已转入待兑付项，不作失踪登记。</p><p class="ledger-truth">不是有人把他藏起来了。<br>他们把他，记成了我过得好的成本。</p></article><div class="ledger-after"><p>${has("photo") ? "记忆核验通过。<br>林舟的原契已可调阅。" : "近亲身份待核。<br>请提供尚未交割的共同旧事。"}</p><button class="command" data-action="${has("photo") ? "open-contract" : "inspect-photo"}">${icon(has("photo") ? "scroll" : "image")}${has("photo") ? "调阅原契" : "查看那张旧合照"}</button></div><p class="pending-line">经办：守柳人 / 因果余额 0 / 近亲栏：无可登记项目</p>
      <div class="block-action"><p>登记册的边角，有一条被反复涂改的旧记录。</p><button class="command secondary" data-action="open-keeper">查看那条旧记录</button></div>`;
  }
  function renderContract() {
    const coreReady = has("lostFolks") && has("parents") && has("keeper");
    const nextStep = !has("lostFolks")
      ? `<button class="command" data-action="open-lost">${icon("messages-square")}回看最新回帖</button>`
      : !has("parents")
        ? `<button class="command" data-action="open-parents">${icon("archive-restore")}去翻父母的抽屉</button>`
        : `<button class="command" data-action="open-keeper">${icon("file-clock")}查看第一笔账</button>`;
    let witnessAction = `<button class="command secondary" data-action="open-evidence">${icon("shield-check")}核验三份证据</button>`;
    let witnessText = "把他的本名留在三个不归柳管的地方，柳便不能把他写成从未存在。";
    if (!has("diary")) {
      witnessAction = `<button class="command secondary" data-action="open-diary">${icon("file-clock")}先恢复隐藏日记</button>`;
      witnessText = "你还没有找到林舟自己留下的站外记录。";
    } else if (!has("codex")) {
      witnessAction = `<button class="command secondary" data-action="open-codex">${icon("library")}先读古籍异文</button>`;
      witnessText = "旧例的关键一行还没有补全，不能贸然照做。";
    }
    return `${heading("柳下存根 / LX0617", "那张没人读完的红纸。", "近亲身份已核验 · 林晚 · 原件仍封存在柳祠树洞")}
      <article class="red-paper"><div class="contract-id">柳下原契 · LX0617</div><h3>愿书</h3><p>立愿人林舟，今自愿以与胞姐林晚所系之因，换其往后安稳、诸事顺遂。</p><p>所愿：<strong>让姐姐林晚过得好。</strong></p><p>所应每进一分，所系即归一分。愿有所应，应有所还。</p>${state.unfolded ? '<div class="fold"></div><p>尚存末项：<strong>姐姐关于弟弟的全部童年记忆。</strong></p><p class="fine-print">立愿人不在，得由近亲代还。代还者书“还愿”二字，即视为收讫。所系结清后，立愿人于受益人之生平不复存续。</p><p class="fine-print">末项未交割前，近亲可具名申请“暂不结清”。原物不返，旧债不减，仅缓末项。此为展期，非赎回。</p><p class="signature">林舟<br><small>二〇二六年六月十七日</small></p>' : '<div class="fold"><button data-action="unfold">纸在这里折过。展开下半页。</button></div>'}</article>
      ${state.unfolded && !has("contract") ? '<div class="contract-controls"><button class="command" data-action="keep-contract">核对落款，留存完整原契</button></div>' : ""}
      ${has("contract") && !coreReady ? `<section class="investigation-gate"><header><span>${icon("list-checks")}</span><div><h3>落字前，还差几页没有读完。</h3><p>原契不会替你解释那些已经结清的人。</p></div></header><ul><li class="${has("lostFolks") ? "done" : ""}">${icon(has("lostFolks") ? "check" : "circle")}愿望柳历年回帖</li><li class="${has("parents") ? "done" : ""}">${icon(has("parents") ? "check" : "circle")}父母抽屉里的旧红纸</li><li class="${has("keeper") ? "done" : ""}">${icon(has("keeper") ? "check" : "circle")}守柳人的第一笔账</li></ul>${nextStep}</section>` : ""}
      ${has("contract") && coreReady ? `<section class="choice-section"><h3>最后一笔，等你落字。</h3><div class="choice-row witness-choice"><div><span class="choice-kicker">古籍异文</span><h4>${has("witness") ? "柳外留名" : "还有一种旧办法"}</h4><p>${has("witness") ? "三处离线记录已经互相印证。保住林舟存在过的事实，但仍不能让他回来。" : witnessText}</p></div>${has("witness") ? `<button class="command" data-action="choose" data-ending="recorded">${icon("network")}在柳外落字</button>` : witnessAction}</div><div class="choice-row"><div><h4>暂不结清</h4><p>保留最后一段童年记忆。林舟不会被彻底抹去，但现在仍回不来。</p></div><button class="command" data-action="choose" data-ending="extended">${icon("pause")}请求展期</button></div><div class="choice-row"><div><h4>代他还愿</h4><p>交割最后的记忆。愿望全部兑现，林舟将从你的生平中消失。</p></div><button class="command danger" data-action="choose" data-ending="settled">${icon("pen-line")}代为签收</button></div><p class="quiet-note">柳下没有催你。<br>它只等你把字写完。</p></section>` : ""}`;
  }
  function renderDrawer() {
    const open = state.drawerOpen;
    return `${heading("私人 / 父母的老抽屉", "抽屉最底层，压着半张红纸。", "父亲从不让碰这个抽屉。锁早就坏了，他却一直当它锁着。")}
      <article class="gazette-paper"><div class="volume">旧红纸 · 对折 · 边缘焦黑</div><h3>愿 书（残）</h3><div class="gazette-text"><p>立愿人 <strong>林秀芝</strong>，今自愿以与子 <strong>林舟</strong>、女 <strong>林晚</strong> 所系之因，换其 <strong>好好长大</strong>。</p><p>所愿：<strong>让孩子好好长大。</strong></p><p>所应每进一分，所系即归一分……</p>${open ? '<div class="annotation-note"><strong>纸的下半截被剪掉了。</strong><br>剪口平整，不是撕的。缺掉的那一段，是「还愿」的落款。<br><br>纸背有一行极淡的铅笔字：<em>「孩子顺顺当当长大，比什么都强。我签。」</em></div><p class="fine-print">——这是母亲的字。她签过。父亲，代她还过。</p>' : '<div class="fold"><button class="text-button" data-action="unfold-paper">纸折在这里。小心展开。</button></div>'}</div><div class="page-number">约 1998 年 · 柳巷林家</div></article>
      ${open ? `<div class="block-action"><p>${has("parents") ? "他们早就签过字。这就是为什么，他们对弟弟失踪，淡得反常。" : "这不是林舟一个人的契约。这是一家三口，都欠过柳娘娘。"}</p><button class="command" data-action="keep-parents" ${has("parents") ? "disabled" : ""}>${icon(has("parents") ? "check" : "notebook-pen")}${has("parents") ? "已留存" : "留存这张红纸"}</button></div>` : ""}`;
  }
  function renderKeeper() {
    const unfold = state.keeperUnfold;
    return `${heading("还愿登记 / 2009 年残页", "一条被涂改的记录。", "所有登记里，只有这一条，名字被反复涂黑，最后写着「佚」。")}
      <article class="ledger-document"><header><div><h3>愿事因果兑付登记</h3><p>No. LX0001 / 最早的一笔</p></div><span class="ledger-stamp">已结清</span></header><dl class="ledger-detail"><div><dt>许愿人</dt><dd>守柳人</dd></div><div><dt>本名</dt><dd><span class="ink-red">（已佚）</span></dd></div><div><dt>所愿</dt><dd>愿柳巷的乡亲都平安</dd></div><div><dt>抵押</dt><dd>自己的名字</dd></div></dl>${unfold ? '<div class="ledger-truth">他把「名字」抵押给了柳娘娘，自己还愿结清。所以这世上，再没人记得守柳人真名是什么。<br><br>他成了柳娘娘在人间的账房先生。不是反派，是「兑付完成之后的样子」——这就是你迟早会变成的样子，如果你走错了那一步。</div>' : '<div class="block-action"><p>这条记录缺了最关键的一栏。翻到背面？</p><button class="command" data-action="unfold-keeper">展开这条记录</button></div>'}</article>
      ${unfold ? `<div class="ledger-after"><p>${has("keeper") ? "守柳人不是神，是一个把名字都兑付出去的人。" : "十多年，他守着这个帖子，等每一个许愿的人。"}</p><button class="command" data-action="keep-keeper" ${has("keeper") ? "disabled" : ""}>${icon(has("keeper") ? "check" : "notebook-pen")}${has("keeper") ? "已留存" : "留存这条记录"}</button></div>` : ""}`;
  }
  function renderEvidence() {
    if (has("witness")) {
      return `${heading("离线存证 / 柳外三证", "三处校验通过", "生成时间：2026-09-14 23:58 · 三份原件互不依赖")}
        <div class="evidence-manifest"><header>${icon("shield-check")}<div><h3>林舟 / 异地留名清单</h3><p>名字、关系与原始记录均已交叉确认。</p></div><span>VALID</span></header><ol><li><b>01</b><div><strong>._drafts.bin 恢复包</strong><small>旧手机本机闪存 · 末页签名「林舟」</small></div><code>7A-0617-00</code></li><li><b>02</b><div><strong>IMG_20140823_02 缓存</strong><small>未同步相册缓存 · 原备注「舟和姐，河边」</small></div><code>BC-0823-17</code></li><li><b>03</b><div><strong>林家旧红纸</strong><small>纸质原件 · 子「林舟」、女「林晚」</small></div><code>RF-1998-02</code></li></ol><p>每份记录都在柳巷论坛与还愿登记之外。任一份被改，另外两份会立即失配。</p></div><div class="block-action"><p>现在可以回到原契，在柳下的规则之外落字。</p><button class="command" data-action="open-contract">${icon("scroll")}返回原契</button></div>`;
    }
    return `${heading("离线存证 / 柳外三证", "哪些记录不归柳管？", "选择三份既在论坛与登记处之外，又明确保有「林舟」本名的材料")}
      <form class="evidence-builder" id="evidence-form"><div class="evidence-rule"><span>${icon("book-key")}</span><p>三人各录其初名于异处，历一夕名不易，则其人之系尚在人间，柳不得尽取。</p></div><fieldset><legend>可用记录 · 请选择三份</legend><label><input type="checkbox" name="evidence" value="diary"><span>${icon("hard-drive")}<strong>旧手机日记恢复包</strong><small>本机闪存 · 末页有原始签名「林舟」</small></span></label><label><input type="checkbox" name="evidence" value="photo"><span>${icon("image")}<strong>未同步的合照缓存</strong><small>相册离线缓存 · 原备注「舟和姐，河边」</small></span></label><label><input type="checkbox" name="evidence" value="parents"><span>${icon("file-text")}<strong>母亲保存的旧红纸</strong><small>纸质原件 · 写有子「林舟」、女「林晚」</small></span></label><label><input type="checkbox" name="evidence" value="forum"><span>${icon("messages-square")}<strong>愿望柳第 3241 楼</strong><small>柳巷论坛数据库 · 写有「我叫林舟」</small></span></label><label><input type="checkbox" name="evidence" value="ledger"><span>${icon("database")}<strong>LX0617 还愿登记</strong><small>柳下登记系统 · 许愿人「林舟」</small></span></label><label><input type="checkbox" name="evidence" value="gazette"><span>${icon("library")}<strong>县志数字馆第 119 页</strong><small>馆藏扫描 · 记载规则，没有林舟姓名</small></span></label></fieldset><p class="selection-count" id="evidence-count">已选择 0 / 3</p><p class="inline-error" id="evidence-error" role="status"></p><button class="command">${icon("shield-check")}建立三处校验</button></form>`;
  }
  function renderProfile() {
    const identity = state.ending === "settled" ? "家中独女" : has("ledger") && !has("photo") ? "亲属关系待核" : "林舟的姐姐";
    const settled = state.ending === "settled";
    const collected = settled ? 0 : state.clues.length;
    const readTrip = state.topicReads.includes("returnTrip");
    const readWater = state.topicReads.includes("waterJune");
    const searchResult = profileSearchMessage ? `<div class="profile-search-result" role="status">${icon("search-check")}<span>${escape(profileSearchMessage)}</span></div>` : "";
    const timeline = has("homeDate")
      ? `<section class="timeline-verified"><span>${icon("badge-check")}</span><div><strong>回家日期已核对：2026 年 6 月 16 日</strong><p>晚来风从北桥下车，一叶小舟接她回到柳巷。第 3241 楼在次日 00:16 写下“昨天”。</p></div><button class="command secondary" data-action="open-resource" data-resource="lostfound">${icon("smartphone")}去失物招领</button></section>`
      : `<form class="timeline-audit" id="timeline-form"><header><span>${icon("calendar-search")}</span><div><h3>核对那次回家</h3><p>不要用凭单日期代替手机密码。把两份旧帖和第 3241 楼放在一起看。</p></div></header><div class="timeline-fields"><label>她回到青河的日期<select id="timeline-date" required><option value="">请选择</option><option value="0615">6 月 15 日</option><option value="0616">6 月 16 日</option><option value="0617">6 月 17 日</option></select></label><label>末班车临时停靠<select id="timeline-stop" required><option value="">请选择</option><option value="station">老汽车站</option><option value="north">北桥</option><option value="south">南门</option></select></label><label>谁确认她已经到家<select id="timeline-witness" required><option value="">请选择</option><option value="zhou">林舟</option><option value="keeper">守柳人</option><option value="driver">公交司机</option></select></label></div><p class="inline-error" id="timeline-error" role="status">${!readTrip || !readWater ? "先打开下面两份 6 月 16 日的历史帖子。" : ""}</p><button class="command">${icon("combine")}核对时间线</button></form>`;
    const trace = has("ledger") && has("wish") ? `<section class="forum-trace"><header><div><span class="eyebrow">同楼层版本对照</span><h3>第 3241 楼在你查账后发生了变化</h3></div><span class="trace-status">${has("forumTrace") ? "DIFF SAVED" : "1 处冲突"}</span></header><div class="trace-grid"><article><small>本机收藏快照 · 00:16</small><p>我叫<strong>林舟</strong>。<br>愿姐姐<strong>林晚</strong>过得好。</p></article><article class="changed"><small>论坛当前版本 · 23:41</small><p><strong>[ 该用户不存在 ]</strong><br>愿一个重要的人过得好。</p></article></div><p>楼层、时间和凭单仍然一致，只有姓名与关系被改掉。论坛不是旁观者，它也在替柳整理记录。</p><button class="command secondary" data-action="keep-forum-trace" ${has("forumTrace") ? "disabled" : ""}>${icon(has("forumTrace") ? "check" : "file-diff")}${has("forumTrace") ? "差异已留存" : "留存两版差异"}</button></section>` : "";
    return `${crumb("用户中心 / 晚来风")}
      ${searchResult}<section class="profile-page">
        <header class="profile-head">
          <span class="avatar me">晚</span>
          <div class="profile-head-info">
            <h2>晚来风</h2>
            <p>林晚　·　UID：9417　<span class="online"><b></b>当前在线</span></p>
          </div>
        </header>
        <dl class="profile-facts">
          <div><dt>用户组</dt><dd>新注册会员</dd></div>
          <div><dt>注册时间</dt><dd>2024-08-23</dd></div>
          <div><dt>最后登录</dt><dd>${state.ending ? "2026-09-15" : "2026-09-14"} 23:5${state.ending ? "9" : "6"}</dd></div>
          <div><dt>发帖数</dt><dd>${settled ? 2 : 3 + state.forumReplies.length}</dd></div>
          <div><dt>收藏主题</dt><dd>${collected}</dd></div>
          <div><dt>个性签名</dt><dd id="identity">${identity}</dd></div>
        </dl>
        <section class="profile-history"><header><div><h3>历史发言</h3><p>按发表时间倒序，仅显示未删除记录。</p></div><span>3 条</span></header><ol><li><time>09-12</time><button data-action="open-topic" data-topic="photos"><strong>征集青河老街、柳巷和旧码头照片</strong><small>我家有几张 2014 年河边的照片，周末找找。</small></button><span>旧城相册</span></li><li class="key-record"><time>06-16</time><button data-action="open-topic" data-topic="waterJune"><strong>柳巷西段晚间临时停水</strong><small>一叶小舟：刚从北桥把我姐接回家。</small></button><span>${readWater ? "已读" : "生活互助"}</span></li><li class="key-record"><time>06-16</time><button data-action="open-topic" data-topic="returnTrip"><strong>晚班车临时改停北桥</strong><small>晚来风：刚从外地回来，今晚能回柳巷。</small></button><span>${readTrip ? "已读" : "青河杂谈"}</span></li></ol></section>
        ${timeline}${trace}
        <div class="profile-actions">
          <button class="command secondary" data-action="home">${icon("arrow-left")}返回论坛首页</button>
        </div>
        <p class="profile-footnote">本页由柳巷论坛自动生成。会员资料仅本人可见。</p>
      </section>`;
  }
  function renderEnding() {
    const ending = STORY.endings[state.ending];
    return `${crumb("愿事登记 / " + ending.mark)}<article class="ending"><span class="ending-eyebrow">LX0617　/　${ending.mark}</span><h2>${ending.name}</h2><p class="ending-lead">${ending.lead}</p><div class="ending-prose">${ending.paragraphs.map((text) => `<p>${text}</p>`).join("")}</div><div class="ending-receipt">${ending.final}</div><div class="ending-buttons"><button class="command secondary" data-action="replay">${icon("undo-2")}返回落款页</button><button class="command secondary" data-action="restart">${icon("rotate-ccw")}清除浏览记录</button></div></article>`;
  }
  function showModal(label, title, content) {
    if (!modal.open) openedFrom = document.activeElement;
    $("#modal-label").textContent = label;
    $("#modal-content").innerHTML = `<h2 id="modal-title">${title}</h2>${content}`;
    if (!modal.open) modal.showModal();
    modal.scrollTop = 0;
    icons();
  }
  function closeModal() {
    modal.close();
    if (openedFrom?.isConnected) openedFrom.focus({ preventScroll: true });
  }
  function openReply(postId) {
    const meta = renderedPosts.get(postId);
    if (!meta) { toast("这条帖子暂时无法回复。"); return; }
    showModal("发表回复", `回复 ${meta.author}`, `<form id="reply-form" class="reply-form" data-post-id="${escape(postId)}"><p class="reply-reference">${escape(meta.floor)} · ${escape(meta.excerpt.slice(0, 90))}</p><label for="reply-text">回复内容</label><textarea id="reply-text" maxlength="500" rows="5" required placeholder="写下你的回复"></textarea><p class="inline-error" id="reply-error" role="status"></p><div class="modal-actions"><button class="command">${icon("send")}发表回复</button><button class="command secondary" type="button" data-action="close-modal">取消</button></div></form>`);
  }
  function toggleForumBookmark(postId) {
    if (postId === "wish-found-0") {
      if (has("wish")) return;
      collect("wish"); save(); render(); toast("已收藏第 3241 楼。旧手机现已登记在失物招领处。"); return;
    }
    const existing = state.forumBookmarks.findIndex((item) => item.id === postId);
    if (existing >= 0) {
      state.forumBookmarks.splice(existing, 1);
      save(); render(); toast("已取消收藏这条帖子。"); return;
    }
    const meta = renderedPosts.get(postId);
    if (!meta) { toast("这条帖子暂时无法收藏。"); return; }
    state.forumBookmarks.push({ id: meta.id, author: meta.author, floor: meta.floor, excerpt: meta.excerpt });
    save(); render(); toast(`已收藏 ${meta.author} 的帖子。`);
  }
  function notebook(clue) {
    if (state.ending === "settled") { showModal("我的收藏", "收藏夹为空", "<p>暂无已收藏内容。</p>"); return; }
    const keys = clue && has(clue) ? [clue] : CLUES.filter(has);
    const clueItems = keys.map((key) => `<section class="notebook-clue"><h3>${STORY.clues[key].title}</h3><p>${STORY.clues[key].text}</p><small>${STORY.clues[key].source}</small></section>`).join("");
    const forumItems = clue ? "" : state.forumBookmarks.map((item) => `<section class="notebook-clue forum-bookmark"><h3>${escape(item.author)} · ${escape(item.floor)}</h3><p>${escape(item.excerpt)}</p><small>柳巷论坛 / 帖子收藏</small></section>`).join("");
    const total = clue ? keys.length : state.clues.length + state.forumBookmarks.length;
    showModal("我的收藏", clue ? STORY.clues[clue].title : `已收藏 ${total} 项`, clueItems || forumItems ? clueItems + forumItems : "<p>暂无已收藏内容。</p>");
  }
  function choose(ending) {
    if (!has("contract")) return;
    if (ending === "recorded" && !has("witness")) return;
    const extended = ending === "extended";
    const recorded = ending === "recorded";
    const title = recorded ? "柳外留名" : extended ? "请求展期" : "代林舟还愿";
    const summary = recorded ? "三份柳外记录已经互相校验。你不能让林舟回来，但可以让论坛与账簿不再垄断他是否存在。" : extended ? "最后一段记忆暂不交割。林舟的名字会留下，他仍不能回来，旧债也不会减少。" : "你将交出关于林舟的全部童年记忆。他会从你的人生中彻底消失，而你会过得很好。";
    const words = recorded ? "林舟在此" : extended ? "暂不结清" : "还愿";
    showModal("LX0617 / 近亲落款", title, `<div class="confirm-summary"><p>${summary}</p></div><form id="ending-form" class="confirm-form" data-ending="${ending}"><label for="sign-name">近亲落款</label><input id="sign-name" value="林晚" maxlength="12" required autocomplete="off"><label for="sign-words">${recorded ? "存证文字" : extended ? "展期申请" : "签收文字"}</label><input id="sign-words" placeholder="${words}" maxlength="12" required autocomplete="off"><p class="inline-error" id="ending-error" role="status"></p><button class="command ${!recorded && !extended ? "danger" : ""}">${icon(recorded ? "network" : "pen-line")}${recorded ? "将本名写在柳外" : extended ? "具名申请展期" : "交割最后一笔"}</button></form><div class="modal-actions"><button class="text-button" data-action="close-modal">先不落字</button></div>`);
  }
  document.addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) return;
    if (target.dataset.view) return navigate(target.dataset.view);
    const action = target.dataset.action;
    if (!action) return;
    switch (action) {
      case "home":
        if (state.ending) { toast("本页已经归档。"); break; }
        profileSearchMessage = ""; state.view = "home"; state.category = ""; state.topic = ""; save(); render(true); break;
      case "category":
        if (state.ending) { toast("本页已经归档。"); break; }
        profileSearchMessage = ""; state.view = "home"; state.category = target.dataset.category || ""; state.topic = ""; save(); render(true); break;
      case "open-topic":
        if (state.ending) { toast("本页已经归档。"); break; }
        profileSearchMessage = "";
        state.category = ""; state.topic = target.dataset.topic || "";
        if (["returnTrip", "waterJune"].includes(state.topic) && !state.topicReads.includes(state.topic)) state.topicReads.push(state.topic);
        state.view = state.topic === "wish" ? "forum" : "topic"; save(); render(true); break;
      case "open-resource": {
        if (state.ending) { toast("本页已经归档。"); break; }
        const resource = target.dataset.resource;
        if (resource === "phone" && !has("wish")) { state.topic = "lost"; state.view = "topic"; save(); render(true); break; }
        if (resource === "drawer" && !has("voice")) { toast("你还没找到林舟留下的那张红纸的线索。先听听他的留言。"); break; }
        if (resource === "codex" && !has("terms")) { toast("早期抄本还没有出现在目录里。先读第 119 页的两处边注。"); break; }
        if (resource === "evidence" && !has("diary")) { toast("存证清单缺少本机原始记录。先恢复旧手机里被删除的日记。"); break; }
        if (resource === "evidence" && !has("codex")) { toast("还不知道旧例要求什么。先完成古籍异文校勘。"); break; }
        if (resource === "evidence" && (!has("photo") || !has("parents"))) { toast("三份柳外材料还没找齐：需要合照缓存和父母抽屉里的红纸。"); break; }
        navigate(resource); break;
      }
      case "profile": profileSearchMessage = ""; state.view = "profile"; state.category = ""; state.topic = ""; save(); render(true); break;
      case "close-modal": closeModal(); break;
      case "dismiss-notification": $("#notification").hidden = true; break;
      case "clue": notebook(target.dataset.clue); break;
      case "reply-post": openReply(target.dataset.postId); break;
      case "favorite-post": toggleForumBookmark(target.dataset.postId); break;
      case "page": state.page = target.dataset.page; searchMessage = ""; save(); render(); break;
      case "keep-wish":
        if (!has("wish")) { collect("wish"); render(); toast("已收藏第 3241 楼。旧手机现已登记在失物招领处。"); }
        break;
      case "open-phone":
        if (!has("wish")) { toast("暂时没有可供你认领的手机。"); break; }
        navigate("phone"); break;
      case "phone-tab": state.phoneTab = target.dataset.tab; save(); render(); break;
      case "transcript": state.transcript = !state.transcript; save(); render(); break;
      case "toggle-hidden": state.showHidden = !state.showHidden; save(); render(); break;
      case "open-diary":
        if (!state.unlocked) { toast("先解锁旧手机。"); break; }
        navigate("diary"); break;
      case "diary-piece":
        if (state.diaryOrder.length < 4 && !state.diaryOrder.includes(target.dataset.piece)) state.diaryOrder.push(target.dataset.piece);
        diaryMessage = ""; save(); render(); break;
      case "reset-diary": state.diaryOrder = []; diaryMessage = ""; save(); render(); break;
      case "restore-diary":
        if (state.diaryOrder.join(",") === "a,c,b,d") { state.diaryRestored = true; diaryMessage = ""; save(); render(); }
        else { state.diaryOrder = []; diaryMessage = "顺序无法重组。先看清每页提到的是“后天回来”“明晚回来”“她睡着了”，还是许愿之后。"; save(); render(); }
        break;
      case "keep-diary":
        if (has("diary")) navigate("gazette");
        else { collect("diary"); render(); }
        break;
      case "keep-voice":
        if (has("voice")) navigate("gazette");
        else { collect("voice"); render(); notify("work", "林晚的手机 / 工作群", "关于任职调整", "你的晋升申请已通过。最近辛苦了，今晚睡个好觉。"); }
        break;
      case "annotation":
        if (!state.annotations.includes(target.dataset.note)) state.annotations.push(target.dataset.note);
        else state.annotations = state.annotations.filter((key) => key !== target.dataset.note);
        save(); render(); break;
      case "keep-terms":
        if (state.annotations.length < 2) break;
        if (has("terms")) navigate("codex");
        else { collect("terms"); render(); }
        break;
      case "open-codex": navigate("codex"); break;
      case "fix-codex": state.codexRevealed = true; save(); render(); break;
      case "inspect-photo": state.phoneTab = "photo"; navigate("phone"); break;
      case "compare": state.compare = !state.compare; save(); render(); break;
      case "open-contract":
        if (!has("photo") || !has("ledger")) { toast("近亲身份还未核实。先核对那张旧合照。"); break; }
        navigate("contract"); break;
      case "unfold": state.unfolded = true; save(); render(); break;
      case "keep-contract":
        collect("contract"); render();
        notify("bank", "林晚的手机 / 银行", "工资已到账", "本月绩效奖金已入账。近期支出不多，账户余额比上月多了一截。");
        break;
      case "open-drawer": navigate("drawer"); break;
      case "open-keeper": navigate("keeper"); break;
      case "open-parents": navigate("drawer"); break;
      case "open-evidence": navigate("evidence"); break;
      case "open-lost": state.view = "forum"; state.page = "recent"; save(); render(true); break;
      case "unfold-paper": state.drawerOpen = true; save(); render(); break;
      case "keep-parents":
        if (has("parents")) break;
        collect("parents"); render();
        notify("landlord", "林晚的手机 / 房东", "房租这个月免了", "你在外地租的房子，房东说这个月不用交了。他说你人好，难得。");
        break;
      case "unfold-keeper": state.keeperUnfold = true; save(); render(); break;
      case "keep-keeper":
        if (has("keeper")) break;
        collect("keeper"); render(); break;
      case "keep-lost":
        if (has("lostFolks")) break;
        collect("lostFolks"); render();
        notify("colleague", "林晚的手机 / 同事", "大家都说你好", "今天组里聚餐，所有人都说最近你状态特别好，特别顺。你只觉着哪里空落落的。");
        break;
      case "keep-forum-trace":
        if (has("forumTrace")) break;
        collect("forumTrace"); render(); break;
      case "choose": choose(target.dataset.ending); break;
      case "restart":
        showModal("退出登录", "清除本机浏览记录？", '<p>收藏、访问记录和登记状态将从这台设备移除。</p><div class="modal-actions"><button class="command danger" data-action="confirm-restart">清除并退出</button><button class="command secondary" data-action="close-modal">取消</button></div>'); break;
      case "confirm-restart": {
        const reduced = state.reduced;
        state = fresh(); state.reduced = reduced; searchMessage = ""; diaryMessage = ""; profileSearchMessage = "";
        $("#notification").hidden = true; closeModal(); save(); render();
        window.scrollTo({ top: 0, behavior: "instant" }); break;
      }
      case "replay": state.ending = null; state.view = "contract"; save(); render(true); break;
    }
  });
  document.addEventListener("submit", (event) => {
    const form = event.target;
    event.preventDefault();
    if (form.id === "site-search-form") {
      const query = $("#site-search").value.trim();
      if (!query) { $("#site-search").focus(); return; }
      if (/林晚|晚来风/i.test(query)) {
        profileSearchMessage = `找到会员“晚来风”（林晚）及 3 条历史发言。`;
        state.topic = ""; state.view = "profile"; state.category = ""; save(); render(true); return;
      }
      if (/愿望柳|许愿|还愿|柳娘娘|林舟|一叶小舟|LX0617|林秀芝|守柳人/i.test(query)) {
        state.view = "forum"; state.category = ""; state.topic = "wish";
        if (/林舟|一叶小舟|LX0617/i.test(query)) { state.page = "found"; searchMessage = "找到 1 条相关留言，以及相邻的版主回复。"; }
        if (/守柳人|林秀芝/i.test(query)) { state.page = "first"; searchMessage = "找到相关的版主留言。"; }
        save(); render(true); return;
      }
      const match = Object.entries(TOPICS).find(([, topic]) => `${topic.title}${topic.author}${topic.category}`.includes(query));
      if (match) { state.topic = match[0]; state.view = "topic"; state.category = ""; save(); render(true); return; }
      toast(`没有找到“${query}”的相关主题。`); return;
    }
    if (form.id === "reply-form") {
      const targetId = form.dataset.postId;
      const meta = renderedPosts.get(targetId);
      const text = $("#reply-text").value.trim();
      if (!meta) { $("#reply-error").textContent = "原帖已经离开当前页面，请关闭窗口后重试。"; return; }
      if (!text) { $("#reply-error").textContent = "回复内容不能为空。"; return; }
      state.forumReplies.push({ id: `reply-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, rootId: meta.rootId || meta.id, replyTo: meta.author, text: text.slice(0, 500) });
      save(); closeModal(); render(); toast("回复已发表。"); return;
    }
    if (form.id === "timeline-form") {
      if (!state.topicReads.includes("returnTrip") || !state.topicReads.includes("waterJune")) { $("#timeline-error").textContent = "材料还不完整。先打开两份 6 月 16 日的历史帖子。"; return; }
      if ($("#timeline-date").value !== "0616" || $("#timeline-stop").value !== "north" || $("#timeline-witness").value !== "zhou") { $("#timeline-error").textContent = "三处记录还没有对上：看清日期、临时停靠点，以及谁确认她已经到家。"; return; }
      collect("homeDate"); render(); return;
    }
    if (form.id === "search-form") {
      const query = $("#search-input").value.trim();
      if (!query) { searchMessage = "请输入用户名、姓名或楼层。"; render(); $("#search-input").focus(); return; }
      if (/林舟|林晚|一叶小舟|3241|3242|LX0617/i.test(query)) { state.page = "found"; searchMessage = "找到 1 条相关留言，以及相邻的版主回复。"; }
      else if (/守柳人|3287|到期|林秀芝/i.test(query)) { state.page = "recent"; searchMessage = "已定位到最近的版主回帖。"; }
      else if (/守灯等雨|1721|2015/i.test(query)) { state.page = "old"; searchMessage = "已定位到 2015 年的还愿记录。"; }
      else searchMessage = `没有找到“${query}”的相关回帖。`;
      save(); render(); $("#search-input").value = query;
    }
    if (form.id === "unlock-form") {
      if (!has("homeDate")) { $("#pin-error").textContent = "先核对姐姐上次回家的日期。搜索“林晚”或“晚来风”，查看她的历史发言。"; return; }
      if ($("#pin").value !== "0616") { $("#pin-error").textContent = "密码不对。不要用 6 月 17 日的凭单日期，手机认的是她回到柳巷的那一天。"; $("#pin").select(); return; }
      state.unlocked = true; save(); render(); toast("手机已解锁。没有收到任何新消息。");
    }
    if (form.id === "ledger-form") {
      const name = $("#ledger-name").value.trim();
      const receipt = $("#ledger-receipt").value.trim().toUpperCase();
      if (name !== "林舟") { $("#ledger-error").textContent = "此名未录。查验须用许愿人的本名，不是昵称或近亲姓名。"; return; }
      if (receipt !== "LX0617") { $("#ledger-error").textContent = "凭单不符。请核对第 3241 楼的自留凭单。"; return; }
      if (!has("wish") || !has("voice") || !has("terms")) { $("#ledger-error").textContent = "查验暂缓。请先留存许愿原帖、未发留言与县志边注，核实“还愿”之义。"; return; }
      collect("ledger"); render();
      notify("mother", "林晚的手机 / 妈", "明早回来吃饭吗？", "空着那间屋子我收拾了。你爸说，放张书桌正好。");
    }
    if (form.id === "photo-form") {
      if ($("#photo-side").value !== "left" || $("#photo-object").value !== "blue") { $("#photo-error").textContent = "还没对上。再把旧缓存往右拉，仔细看看他的位置和手里的东西。"; return; }
      collect("photo"); render();
    }
    if (form.id === "codex-form") {
      if ($("#codex-count").value !== "three" || $("#codex-name").value !== "birth" || $("#codex-place").value !== "apart") { $("#codex-error").textContent = "补录与原叶不合。逐列看清淡墨里的“人数、所录之名、记录位置”。"; return; }
      collect("codex"); render();
    }
    if (form.id === "evidence-form") {
      const selected = [...form.querySelectorAll('input[name="evidence"]:checked')].map((input) => input.value).sort();
      if (selected.length !== 3) { $("#evidence-error").textContent = "旧例要求恰好三份记录。"; return; }
      if (selected.join(",") !== "diary,parents,photo") { $("#evidence-error").textContent = "其中至少一份仍由柳巷论坛或登记处控制，或者没有写出林舟本名。"; return; }
      collect("witness"); render();
    }
    if (form.id === "ending-form") {
      const ending = form.dataset.ending;
      const words = ending === "recorded" ? "林舟在此" : ending === "extended" ? "暂不结清" : "还愿";
      if ($("#sign-name").value.trim() !== "林晚") { $("#ending-error").textContent = "近亲落款不符。此处只认林晚。"; return; }
      if ($("#sign-words").value.trim() !== words) { $("#ending-error").textContent = `落款未成。此项应书“${words}”。`; return; }
      state.ending = ending; closeModal(); $("#notification").hidden = true; save(); render(true);
    }
  });
  document.addEventListener("input", (event) => {
    if (event.target.id === "photo-compare") {
      const percent = Number(event.target.value);
      $(".cache-layer").style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      $(".compare-line").style.left = `${percent}%`;
    }
    if (event.target.id === "codex-contrast") {
      const percent = Number(event.target.value);
      $("#codex-contrast-value").textContent = `${percent}%`;
      $("#codex-ink").style.opacity = String(Math.max(0.08, percent / 100));
      $("#codex-fix").disabled = percent < 72;
    }
    if (event.target.name === "evidence") {
      const count = document.querySelectorAll('input[name="evidence"]:checked').length;
      $("#evidence-count").textContent = `已选择 ${count} / 3`;
      if (count > 3) $("#evidence-error").textContent = "只能建立三处校验。";
      else $("#evidence-error").textContent = "";
    }
  });
  document.addEventListener("keydown", (event) => {
    if (!event.target.matches('[data-action="phone-tab"]')) return;
    const tabs = ["chat", "photo", "files"];
    const index = tabs.indexOf(state.phoneTab);
    let next;
    if (event.key === "ArrowRight") next = tabs[(index + 1) % tabs.length];
    if (event.key === "ArrowLeft") next = tabs[(index + tabs.length - 1) % tabs.length];
    if (event.key === "Home") next = tabs[0];
    if (event.key === "End") next = tabs[tabs.length - 1];
    if (!next) return;
    event.preventDefault();
    state.phoneTab = next; save(); render(); $(`[data-tab="${next}"]`).focus();
  });
  $("#notebook").addEventListener("click", () => notebook());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      const r = modal.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeModal();
    }
  });
  window.addEventListener("pagehide", save);
  render();
})();
