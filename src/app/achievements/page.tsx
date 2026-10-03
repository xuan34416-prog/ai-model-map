import { GroundBackdrop } from '@/components/world/Ground';
import { SiteHeader } from '@/components/world/SiteHeader';
import { DEFAULT_LANG } from '@/lib/i18n';

export const metadata = { title: '我的成果' };

const ITEMS = [
  {
    tag: '当前项目',
    title: 'AI 模型能力地图',
    text: '把模型的能力、价格、上下文、评测成绩与发布时间组织成可浏览、可比较的成果网站，用同一套数据回答「现在该选谁」。',
  },
  {
    tag: '研究方向',
    title: '企业模型选型方法',
    text: '从中文能力、数据安全、私有化部署、成本与业务适配度等维度建立选型框架，让结论可以被复述和复核，而不是凭印象。',
  },
  {
    tag: '应用方向',
    title: '工业 AI 应用探索',
    text: '探索技术文档问答、售前方案辅助、设备运维与故障分析等企业场景，把模型能力落到具体业务流程上。',
  },
];

export default function AchievementsPage() {
  const lang = DEFAULT_LANG;
  return (
    <main className="relative min-h-dvh">
      <GroundBackdrop />
      <div className="relative">
        <SiteHeader current="achievements" lang={lang} narrow />
        <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-4 sm:px-8">
          <h1 className="pixel-outline mb-2 mt-4 text-2xl sm:text-3xl">我的成果</h1>
          <p className="mb-6 text-[13px] leading-relaxed text-[var(--color-ghost)]">
            项目、研究与应用案例，会随着工作推进持续补充。
          </p>
          <div className="grid gap-4">
            {ITEMS.map((item) => (
              <article key={item.title} className="pixel-panel-dark p-5">
                <p className="text-[12px] text-[var(--color-gold)]">{item.tag}</p>
                <h2 className="mt-2 font-pixel text-[18px] text-[var(--color-parchment)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-parchment)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
