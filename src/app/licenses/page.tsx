import { GroundBackdrop } from '@/components/world/Ground';
import { SiteHeader } from '@/components/world/SiteHeader';
import { DEFAULT_LANG } from '@/lib/i18n';

export const metadata = { title: '开源致谢与许可' };

const UPSTREAM = { name: 'liyupi/ai-model-world', href: 'https://github.com/liyupi/ai-model-world' };

export default function LicensesPage() {
  const lang = DEFAULT_LANG;
  return (
    <main className="relative min-h-dvh">
      <GroundBackdrop />
      <div className="relative">
        <SiteHeader current={null} lang={lang} narrow />
        <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-4 sm:px-8">
          <h1 className="pixel-outline mb-2 mt-4 text-2xl sm:text-3xl">开源致谢与许可</h1>
          <p className="mb-6 text-[13px] leading-relaxed text-[var(--color-ghost)]">
            本站基于开源项目二次开发。下面是代码、数据与素材各自的许可与出处。
          </p>

          <section className="pixel-panel-dark mb-5 p-5">
            <h2 className="font-pixel text-[15px] text-[var(--color-gold)]">代码与文档</h2>
            <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-parchment)]">
              原项目{' '}
              <a
                href={UPSTREAM.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 hover:text-[var(--color-gold)]"
              >
                {UPSTREAM.name}
              </a>{' '}
              的代码与文档遵循 MIT License，版权归原作者所有。本站保留其许可证与版权声明，
              并对站点名称、界面文案、内容组织与页面结构做了修改。
            </p>
          </section>

          <section className="pixel-panel-dark mb-5 p-5">
            <h2 className="font-pixel text-[15px] text-[var(--color-gold)]">数据、字体与素材</h2>
            <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-parchment)]">
              模型元数据、评测成绩、像素素材与中文字体分别遵循各自上游许可，不适用 MIT。
              逐项的适用范围、署名义务与来源链接见仓库中的 NOTICE.md、assets/lpc/CREDITS.md
              与 docs/DATA.md。本站对部分来源数据做过改名匹配与重新排序，属于修改后的使用。
            </p>
          </section>

          <section className="pixel-panel-dark mb-5 p-5">
            <h2 className="font-pixel text-[15px] text-[var(--color-gold)]">商标与立场</h2>
            <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-parchment)]">
              各模型与厂商名称、标识为其各自所有者的商标，本站仅作指称性使用以标识被描述的对象，
              不表示任何关联或背书。本站不使用 Artificial Analysis 的数据，也不抓取其站点。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
