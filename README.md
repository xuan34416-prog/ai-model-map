# 徐旋 · AI 模型能力地图

面向企业与工业场景的大模型选型与应用能力地图。

这个网站把几百个大模型整理成可浏览、可比较的形式：谁最聪明、谁最会编程、谁最便宜、谁刚发布，一眼看完；再往下是国内与国外分区的厂商广场、完整的发布时间线、多维排行榜，以及面向电力电子与工业业务场景的选型方向。

## 网站包含什么

| 模块 | 作用 |
|---|---|
| 今日格局 | 八块领奖台：最聪明、最会编程、最划算、最便宜、记性最好、最新发布、国内第一、开源第一 |
| 按类型看 | 文本、视觉、全模态、图像生成、视频生成、语音，各自直通筛好的名单 |
| 厂商广场 | 国外 / 国内 × 头部 / 主力 / 尚无评测，每家厂商一间小屋 |
| 模型详情 | 身世、战绩、同系列历代演进 |
| 时间线 | 几百个模型按发布日期排成一条长河 |
| 排行榜 | 综合智力、性价比、上下文、价格，以及多个第三方编程赛制 |
| 模型对比 | 最多四个模型并排逐项比较 |
| 全局搜索 | 认模型名、厂商，也认能力概念 |
| 工业场景 | 技术资料问答、售前方案辅助、设备运维、电力电子知识库等落地方向 |
| 我的成果 | 项目、研究与应用案例 |

首页能力横条由真实数据驱动：格子越多越强，缺数据画成空槽，厂商自报成绩缀一个「自报」。页面文案由数据套模板生成，不经过任何 LLM。

## 文档

| 文档 | 内容 |
|---|---|
| [docs/HANDOFF.md](docs/HANDOFF.md) | 当前状态、不可违背的原则、踩过的坑、代码地图 |
| [docs/PRODUCT-REBRAND-PLAN.md](docs/PRODUCT-REBRAND-PLAN.md) | 本项目改造定位、阶段计划与许可处理清单 |
| [docs/DESIGN.md](docs/DESIGN.md) | 模型属性 → 人物形象的视觉规格 |
| [docs/DATA.md](docs/DATA.md) | 数据来源、字段仲裁规则、合规边界、容错设计 |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | 系统架构与零维护链路 |

## 数据来源

| 用途 | 来源 | 许可 |
|---|---|---|
| 模型元数据 | [models.dev](https://models.dev) | MIT |
| 榜单分数 | [Epoch AI](https://epoch.ai) | CC-BY 4.0 |
| 编程测评 | [LiveBench](https://livebench.ai) | Apache-2.0 |
| 竞技场成绩 | LMArena 官方榜单数据集 | CC-BY 4.0 |
| 参数量与开源许可 | [Hugging Face](https://huggingface.co) | 逐模型判断 |
| 新模型发现与发布日期交叉校验 | OpenRouter · Vercel AI Gateway · LiteLLM | 仅用于发现，不转存展示 |
| 角色形象 | 本站像素画 | 借用设定出处见站内 `/credits/` |
| 中文像素字体 | [Fusion Pixel Font](https://github.com/TakWolf/fusion-pixel-font) | OFL-1.1 |

本项目不使用 Artificial Analysis 的任何数据，也不抓取 LMArena 站点。详见 [docs/DATA.md](docs/DATA.md)。

## 本地开发

```bash
npm install
npm run dev
```

### 数据与素材管线

```bash
npm run sync
npm run sprites
npm run font
npx tsx scripts/sync/selftest.ts
```

### 代码质量闸门

```bash
npx tsc --noEmit
npx eslint src scripts
npx tsx scripts/sync/selftest.ts
```

## 部署

```bash
NEXT_DIST_DIR=out npm run build
```

静态导出产物在 `out/`，可托管到 Vercel、EdgeOne Pages 或任意静态服务器。

## 许可

代码与文档保留原项目 [MIT](LICENSE) 许可证及原作者版权声明。本站新增与修改的内容由本项目作者负责，像素素材、中文字体与数据快照各自遵循上游许可，详见 [NOTICE.md](NOTICE.md)。

本项目基于 [liyupi/ai-model-world](https://github.com/liyupi/ai-model-world) 二次开发，对站点名称、界面文案、内容组织与页面结构做了修改。
