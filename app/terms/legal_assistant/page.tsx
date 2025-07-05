import { Nav } from '@/components/nav'

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <main className="mt-20">
        <div className="w-full bg-[#FFF8F0] bg-gradient-to-t from-[#F49E00] to-[#F7DB90] h-96 relative">
          <div className="w-full mx-auto px-4 absolute pb-12">
            <section className="py-24 flex flex-col justify-center items-center gap-4">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold text-white">
                  TERMS OF SERVICE
                </h1>
                <div className="w-1/3 border-b-2 border-white" />
              </div>
            </section>

            <div className="flex flex-col justify-center items-center gap-8">
              <div className="w-full lg:w-2/3 bg-white rounded-3xl shadow-xl shadow-gray-300 p-4 md:p-8">
                <section className="w-full">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    利用規約
                  </h2>
                  <div className="flex flex-col gap-4 text-gray-700">
                    <p>本規約は、legal assistant（以下「本サービス」）の利用条件を定めるものです。</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">第1条（適用範囲）</h3>
                    <p>本規約は、本サービスの利用に関わる一切の関係に適用されます。また、本サービスの提供に際して当社が別途定めるガイドライン等（以下「個別規定」）も本規約の一部を構成します。</p>
                    <h3 className="text-xl font-boおld text-gray-800 mt-4">第2条（定義）</h3>
                    <p>本規約において、以下の用語はそれぞれ以下の意味を有します。</p>
                    <ul className="list-disc pl-8">
                      <li>「ユーザー」：本サービスを利用する個人または法人。</li>
                    </ul>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">第3条（利用条件）</h3>
                    <p>ユーザーは、本規約を承諾のうえ、自己の責任で本サービスを利用するものとします。本サービスは、情報提供、書類作成支援を目的としており、いかなる法律相談・専門的アドバイスも提供するものではありません。</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">第4条（禁止行為）</h3>
                    <ul className="list-disc pl-8">
                      <li>本サービスを用いて法律相談、紛争解決、刑事事件の代理など士業の独占業務を行う行為。</li>
                      <li>本サービスの運営を妨害する行為、または不正な目的で利用する行為。</li>
                      <li>虚偽の情報を入力し、成果物を改ざんする行為。</li>
                      <li>その他、当社が不適切と判断する行為。</li>
                    </ul>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">第5条（免責事項）</h3>
                    <p>本サービスは現状有姿で提供され、提供するテンプレートやガイドは一般的事例を想定したものです。成果物の正確性・完全性について当社は一切保証せず、利用にあたってはユーザー自身が法律専門家に確認するものとします。当社は本サービスの利用に起因して生じた損害について責任を負いません。</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">第6条（知的財産権）</h3>
                    <p>本サービスに関する著作権、商標権等の知的財産権は当社または正当な権利者に帰属し、ユーザーは本規約の認める範囲でのみ利用できます。</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">第7条（利用停止・登録抹消）</h3>
                    <p>当社は、ユーザーが本規約に違反した場合、事前通知なく利用停止や登録抹消を行うことができ、その損害について責任を負いません。</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">第8条（サービス変更・中断・終了）</h3>
                    <p>当社は、本サービスの内容変更、中断、終了を予告なく行うことができ、それによる損害について責任を負いません。</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">第9条（個人情報の取扱い）</h3>
                    <p>ユーザーの個人情報は「プライバシーポリシー」に従い適切に取り扱います。</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">第10条（準拠法・裁判管轄）</h3>
                    <p>本規約の解釈・適用は日本法を準拠法とし、紛争は東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
