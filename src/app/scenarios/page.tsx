import { GroundBackdrop } from '@/components/world/Ground';
import { SiteHeader } from '@/components/world/SiteHeader';
import { DEFAULT_LANG } from '@/lib/i18n';

export const metadata = { title: '工业场景' };

const SCENARIOS: [string, string][] = [
  ['技术资料问答', '从产品手册、标准文件、方案和历史项目资料中快速定位答案，减少翻文档的时间。'],
  ['售前方案辅助', '辅助整理客户需求、设备参数和技术方案，把重复性的文档工作压缩下来。'],
  ['设备运维支持', '结合故障记录、维护手册与现场数据，辅助定位问题并生成处理建议。'],
  ['电力电子知识库', '围绕电能质量治理、储能 PCS、APF/AHF、SVG 与无功补偿建立企业知识入口。'],
];

export default function ScenariosPage() {
  const lang = DEFAULT_LANG;
  return (
    <main className="relative min-h-dvh">
      <GroundBackdrop />
      <div className="relative">
        <SiteHeader current="scenarios" lang={lang} narrow />
        <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-4 sm:px-8">
          <h1 className="pixel-outline mb-2 mt-4 text-2xl sm:text-3xl">工业场景</h1>
          <p className="mb-6 max-w-3xl text-[13px] leading-relaxed text-[var(--color-ghost)]">
            排行榜回答的是「谁更强」，落地还要回答「谁适合我们的数据和流程」。
            下面这些场景决定了选型时哪些维度真正重要。
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {SCENARIOS.map(([title, text]) => (
              <article key={title} className="pixel-panel-dark p-5">
                <h2 className="font-pixel text-[16px] text-[var(--color-gold)]">{title}</h2>
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-parchment)]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
