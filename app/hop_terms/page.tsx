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
                    <p>
                      この利用規約（以下，「本規約」といいます。）は，Carep
                      Technologies（以下，「当社」といいます。）がアプリ上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第1条（適用）
                    </h3>
                    <p>
                      本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                      当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
                      本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第2条（利用登録）
                    </h3>
                    <p>
                      本サービスにおいては，登録希望者が本規約に同意の上，当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。
                    </p>
                    <p>
                      当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
                    </p>
                    <ul className="list-disc pl-8">
                      <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                      <li>本規約に違反したことがある者からの申請である場合</li>
                      <li>その他，当社が利用登録を相当でないと判断した場合</li>
                    </ul>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第3条（ユーザーIDおよびパスワードの管理）
                    </h3>
                    <p>
                      ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
                      ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。
                      当社は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。
                    </p>
                    <p>
                      ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，当社に故意又は重大な過失がある場合を除き，当社は一切の責任を負わないものとします。
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第4条（利用料金および支払方法）
                    </h3>
                    <p>
                      ユーザーは，本サービスの有料部分の対価として，当社が別途定め，本アプリに表示する利用料金を，当社が指定する方法により支払うものとします。
                      ユーザーが利用料金の支払を遅滞した場合には，ユーザーは年14.6％の割合による遅延損害金を支払うものとします。
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第5条（禁止事項）
                    </h3>
                    <p>
                      ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
                    </p>
                    <ul className="list-disc pl-8">
                      <li>法令または公序良俗に違反する行為</li>
                      <li>犯罪行為に関連する行為</li>
                      <li>本サービスに含まれる知的財産権を侵害する行為</li>
                      <li>当社または第三者の利益を損なう行為</li>
                      <li>その他，当社が不適切と判断する行為</li>
                    </ul>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第6条（本サービスの提供の停止等）
                    </h3>
                    <p>
                      当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                    </p>
                    <ul className="list-disc pl-8">
                      <li>システムの保守点検または更新を行う場合</li>
                      <li>不可抗力による提供が困難な場合</li>
                      <li>その他，当社が困難と判断した場合</li>
                    </ul>
                    <p>
                      当社は，これにより生じた損害について一切責任を負いません。
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第7条（利用制限および登録抹消）
                    </h3>
                    <p>
                      当社は，以下の場合には，事前通知なく利用制限または登録抹消を行うことができます。
                    </p>
                    <ul className="list-disc pl-8">
                      <li>本規約に違反した場合</li>
                      <li>虚偽の情報を登録した場合</li>
                      <li>長期間利用がない場合</li>
                    </ul>
                    <p>
                      当社は，これにより生じた損害について一切責任を負いません。
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第8条（退会）
                    </h3>
                    <p>ユーザーは，当社の定める手続きにより退会できます。</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第9条（保証の否認および免責事項）
                    </h3>
                    <p>
                      本サービスは現状有姿で提供され，瑕疵がないことを保証しません。
                      当社は，損害賠償の責任を負いません。
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第10条（サービス内容の変更等）
                    </h3>
                    <p>
                      当社は，本サービスの内容を変更または提供を中止することがあります。
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第11条（利用規約の変更）
                    </h3>
                    <p>当社は，本規約をいつでも変更できるものとします。</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第12条（個人情報の取扱い）
                    </h3>
                    <p>
                      個人情報の取扱いについては，「プライバシーポリシー」に従います。
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第13条（通知または連絡）
                    </h3>
                    <p>ユーザーとの連絡は，当社の定めた方法で行います。</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第14条（権利義務の譲渡の禁止）
                    </h3>
                    <p>ユーザーは，権利を第三者に譲渡できません。</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-4">
                      第15条（準拠法・裁判管轄）
                    </h3>
                    <p>
                      本規約の準拠法は日本法とし，紛争は当社所在地の裁判所を管轄とします。
                    </p>
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
