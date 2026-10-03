import Link from 'next/link';
import { GroundBackdrop } from '@/components/world/Ground';
import { SiteHeader } from '@/components/world/SiteHeader';
import { DEFAULT_LANG } from '@/lib/i18n';

export const metadata = { title: '关于' };

export default function AboutPage() {
  const lang = DEFAULT_LANG;
  return (
    <main className="relative min-h-dvh">
      <GroundBackdrop />
      <div className="relative">
        <SiteHeader current="about" lang={lang} narrow />
        <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-4 sm:px-8">
          <h1 className="pixel-outline mb-6 mt-4 text-2xl sm:text-3xl">关于</h1>
          <section className="pixel-panel-dark p-5">
            <h2 className="font-pixel text-[16px] text-[var(--color-gold)]">徐旋</h2>
            <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-parchment)]">
              电气工程与半导体厂务背景，关注大模型、工业知识库与企业 AI 应用。
              这个网站用来整理模型信息、沉淀选型方法，并把模型能力和真实业务场景对应起来。
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {['模型评估与选型', '工业知识与文档', '电力电子业务应用'].map((item) => (
                <div
                  key={item}
                  className="border border-white/10 p-3 text-[13px] text-[var(--color-parchment)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
          <p className="mt-6 text-[13px] leading-relaxed text-[var(--color-ghost)]">
            网站数据来自第三方公开评测；界面与内容基于开源项目二次开发，许可说明见
            <Link
              href="/licenses/"
              className="text-[var(--color-gold)] underline decoration-dotted underline-offset-2"
            >
              开源致谢与许可
            </Link>
            页。
          </p>
        </div>
      </div>
    </main>
  );
}
