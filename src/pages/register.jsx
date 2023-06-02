import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Register() {
  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Get started for free
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Already registered?{' '}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign in
              </Link>{' '}
              to your account.
            </p>
          </div>
        </div>
        <form
          action="#"
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            className="col-span-full"
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <SelectField
            className="col-span-full"
            label="When we reach out to you, what language would you prefer?"
            id="language"
            name="language"
          >
              <option value="af">Afrikaans</option>
              <option value="af-ZA">Afrikaans (South Africa)</option>
              <option value="am-ET">Amharic (Ethiopia)</option>
              <option value="ar">Arabic</option>
              <option value="ar-AE">Arabic (U.A.E.)</option>
              <option value="ar-BH">Arabic (Bahrain)</option>
              <option value="ar-DZ">Arabic (Algeria)</option>
              <option value="ar-EG">Arabic (Egypt)</option>
              <option value="ar-IQ">Arabic (Iraq)</option>
              <option value="ar-JO">Arabic (Jordan)</option>
              <option value="ar-KW">Arabic (Kuwait)</option>
              <option value="ar-LB">Arabic (Lebanon)</option>
              <option value="ar-LY">Arabic (Libya)</option>
              <option value="ar-MA">Arabic (Morocco)</option>
              <option value="ar-OM">Arabic (Oman)</option>
              <option value="ar-QA">Arabic (Qatar)</option>
              <option value="ar-SA">Arabic (Saudi Arabia)</option>
              <option value="ar-SY">Arabic (Syria)</option>
              <option value="ar-TN">Arabic (Tunisia)</option>
              <option value="ar-YE">Arabic (Yemen)</option>
              <option value="arn-CL">Mapudungun (Chile)</option>
              <option value="as-IN">Assamese (India)</option>
              <option value="az">Azeri</option>
              <option value="az-Cyrl-AZ">Azeri (Cyrillic) (Azerbaijan)</option>
              <option value="az-Latn-AZ">Azeri (Latin) (Azerbaijan)</option>
              <option value="ba-RU">Bashkir (Russia)</option>
              <option value="be">Belarusian</option>
              <option value="be-BY">Belarusian (Belarus)</option>
              <option value="bg">Bulgarian</option>
              <option value="bg-BG">Bulgarian (Bulgaria)</option>
              <option value="bn-BD">Bengali (Bangladesh)</option>
              <option value="bn-IN">Bengali (India)</option>
              <option value="bo-CN">Tibetan (People's Republic of China)</option>
              <option value="br-FR">Breton (France)</option>
              <option value="bs-Cyrl-BA">Bosnian (Cyrillic) (Bosnia and Herzegovina)</option>
              <option value="bs-Latn-BA">Bosnian (Latin) (Bosnia and Herzegovina)</option>
              <option value="ca">Catalan</option>
              <option value="ca-ES">Catalan (Catalan)</option>
              <option value="co-FR">Corsican (France)</option>
              <option value="cs">Czech</option>
              <option value="cs-CZ">Czech (Czech Republic)</option>
              <option value="cy-GB">Welsh (United Kingdom)</option>
              <option value="da">Danish</option>
              <option value="da-DK">Danish (Denmark)</option>
              <option value="de">German</option>
              <option value="de-AT">German (Austria)</option>
              <option value="de-CH">German (Switzerland)</option>
              <option value="de-DE">German (Germany)</option>
              <option value="de-LI">German (Liechtenstein)</option>
              <option value="de-LU">German (Luxembourg)</option>
              <option value="dsb-DE">Lower Sorbian (Germany)</option>
              <option value="dv">Divehi</option>
              <option value="dv-MV">Divehi (Maldives)</option>
              <option value="el">Greek</option>
              <option value="el-GR">Greek (Greece)</option>
              <option selected value="en">English</option>
              <option value="en-029">English (Caribbean)</option>
              <option value="en-AU">English (Australia)</option>
              <option value="en-BZ">English (Belize)</option>
              <option value="en-CA">English (Canada)</option>
              <option value="en-GB">English (United Kingdom)</option>
              <option value="en-IE">English (Ireland)</option>
              <option value="en-IN">English (India)</option>
              <option value="en-JM">English (Jamaica)</option>
              <option value="en-MY">English (Malaysia)</option>
              <option value="en-NZ">English (New Zealand)</option>
              <option value="en-PH">English (Republic of the Philippines)</option>
              <option value="en-SG">English (Singapore)</option>
              <option value="en-TT">English (Trinidad and Tobago)</option>
              <option value="en-US">English (United States)</option>
              <option value="en-ZA">English (South Africa)</option>
              <option value="en-ZW">English (Zimbabwe)</option>
              <option value="es">Spanish</option>
              <option value="es-AR">Spanish (Argentina)</option>
              <option value="es-BO">Spanish (Bolivia)</option>
              <option value="es-CL">Spanish (Chile)</option>
              <option value="es-CO">Spanish (Colombia)</option>
              <option value="es-CR">Spanish (Costa Rica)</option>
              <option value="es-DO">Spanish (Dominican Republic)</option>
              <option value="es-EC">Spanish (Ecuador)</option>
              <option value="es-ES">Spanish (Spain)</option>
              <option value="es-GT">Spanish (Guatemala)</option>
              <option value="es-HN">Spanish (Honduras)</option>
              <option value="es-LA">Spanish (Latin America)</option>
              <option value="es-MX">Spanish (Mexico)</option>
              <option value="es-NI">Spanish (Nicaragua)</option>
              <option value="es-PA">Spanish (Panama)</option>
              <option value="es-PE">Spanish (Peru)</option>
              <option value="es-PR">Spanish (Puerto Rico)</option>
              <option value="es-PY">Spanish (Paraguay)</option>
              <option value="es-SV">Spanish (El Salvador)</option>
              <option value="es-US">Spanish (United States)</option>
              <option value="es-UY">Spanish (Uruguay)</option>
              <option value="es-VE">Spanish (Venezuela)</option>
              <option value="et">Estonian</option>
              <option value="et-EE">Estonian (Estonia)</option>
              <option value="eu">Basque</option>
              <option value="eu-ES">Basque (Basque)</option>
              <option value="fa">Persian</option>
              <option value="fa-IR">Persian (Iran)</option>
              <option value="fi">Finnish</option>
              <option value="fi-FI">Finnish (Finland)</option>
              <option value="fil-PH">Filipino (Philippines)</option>
              <option value="fo">Faroese</option>
              <option value="fo-FO">Faroese (Faroe Islands)</option>
              <option value="fr">French</option>
              <option value="fr-BE">French (Belgium)</option>
              <option value="fr-CA">French (Canada)</option>
              <option value="fr-CH">French (Switzerland)</option>
              <option value="fr-FR">French (France)</option>
              <option value="fr-LU">French (Luxembourg)</option>
              <option value="fr-MC">French (Principality of Monaco)</option>
              <option value="fy-NL">Frisian (Netherlands)</option>
              <option value="ga-IE">Irish (Ireland)</option>
              <option value="gd-GB">Scottish Gaelic (United Kingdom)</option>
              <option value="gl">Galician</option>
              <option value="gl-ES">Galician (Galician)</option>
              <option value="gsw-FR">Alsatian (France)</option>
              <option value="gu">Gujarati</option>
              <option value="gu-IN">Gujarati (India)</option>
              <option value="ha-Latn-NG">Hausa (Latin) (Nigeria)</option>
              <option value="he">Hebrew</option>
              <option value="he-IL">Hebrew (Israel)</option>
              <option value="hi">Hindi</option>
              <option value="hi-IN">Hindi (India)</option>
              <option value="hr">Croatian</option>
              <option value="hr-BA">Croatian (Latin) (Bosnia and Herzegovina)</option>
              <option value="hr-HR">Croatian (Croatia)</option>
              <option value="hsb-DE">Upper Sorbian (Germany)</option>
              <option value="hu">Hungarian</option>
              <option value="hu-HU">Hungarian (Hungary)</option>
              <option value="hy">Armenian</option>
              <option value="hy-AM">Armenian (Armenia)</option>
              <option value="id">Indonesian</option>
              <option value="id-ID">Indonesian (Indonesia)</option>
              <option value="ig-NG">Igbo (Nigeria)</option>
              <option value="ii-CN">Yi (People's Republic of China)</option>
              <option value="is">Icelandic</option>
              <option value="is-IS">Icelandic (Iceland)</option>
              <option value="it">Italian</option>
              <option value="it-CH">Italian (Switzerland)</option>
              <option value="it-IT">Italian (Italy)</option>
              <option value="iu-Cans-CA">Inuktitut (Syllabics) (Canada)</option>
              <option value="iu-Latn-CA">Inuktitut (Latin) (Canada)</option>
              <option value="ja">Japanese</option>
              <option value="ja-JP">Japanese (Japan)</option>
              <option value="ka">Georgian</option>
              <option value="ka-GE">Georgian (Georgia)</option>
              <option value="kk">Kazakh</option>
              <option value="kk-KZ">Kazakh (Kazakhstan)</option>
              <option value="kl-GL">Greenlandic (Greenland)</option>
              <option value="km-KH">Khmer (Cambodia)</option>
              <option value="kn">Kannada</option>
              <option value="kn-IN">Kannada (India)</option>
              <option value="ko">Korean</option>
              <option value="ko-KR">Korean (Korea)</option>
              <option value="kok">Konkani</option>
              <option value="kok-IN">Konkani (India)</option>
              <option value="ky">Kyrgyz</option>
              <option value="ky-KG">Kyrgyz (Kyrgyzstan)</option>
              <option value="la">Latin</option>
              <option value="lb-LU">Luxembourgish (Luxembourg)</option>
              <option value="lo-LA">Lao (Lao P.D.R.)</option>
              <option value="lt">Lithuanian</option>
              <option value="lt-LT">Lithuanian (Lithuania)</option>
              <option value="lv">Latvian</option>
              <option value="lv-LV">Latvian (Latvia)</option>
              <option value="mi-NZ">Maori (New Zealand)</option>
              <option value="mk">Macedonian</option>
              <option value="mk-MK">Macedonian (Former Yugoslav Republic of Macedonia)</option>
              <option value="ml-IN">Malayalam (India)</option>
              <option value="mn">Mongolian</option>
              <option value="mn-MN">Mongolian (Cyrillic) (Mongolia)</option>
              <option value="mn-Mong-CN">Mongolian (Traditional Mongolian) (People's Republic of China)</option>
              <option value="moh-CA">Mohawk (Canada)</option>
              <option value="mr">Marathi</option>
              <option value="mr-IN">Marathi (India)</option>
              <option value="ms">Malay</option>
              <option value="ms-BN">Malay (Brunei Darussalam)</option>
              <option value="ms-MY">Malay (Malaysia)</option>
              <option value="mt-MT">Maltese (Malta)</option>
              <option value=""nb-NO>"Norwegian, Bokmål (Norway)"</option>
              <option value="ne-NP">Nepali (Nepal)</option>
              <option value="nl">Dutch</option>
              <option value="nl-BE">Dutch (Belgium)</option>
              <option value="nl-NL">Dutch (Netherlands)</option>
              <option value=""nn-NO>"Norwegian, Nynorsk (Norway)"</option>
              <option value="no">Norwegian</option>
              <option value="nso-ZA">Sesotho sa Leboa (South Africa)</option>
              <option value="oc-FR">Occitan (France)</option>
              <option value="or-IN">Oriya (India)</option>
              <option value="pa">Punjabi</option>
              <option value="pa-IN">Punjabi (India)</option>
              <option value="pl">Polish</option>
              <option value="pl-PL">Polish (Poland)</option>
              <option value="prs-AF">Dari (Afghanistan)</option>
              <option value="ps-AF">Pashto (Afghanistan)</option>
              <option value="pt">Portuguese</option>
              <option value="pt-BR">Portuguese (Brazil)</option>
              <option value="pt-PT">Portuguese (Portugal)</option>
              <option value="qut-GT">K'iche (Guatemala)</option>
              <option value="quz-BO">Quechua (Bolivia)</option>
              <option value="quz-EC">Quechua (Ecuador)</option>
              <option value="quz-PE">Quechua (Peru)</option>
              <option value="rm-CH">Romansh (Switzerland)</option>
              <option value="ro">Romanian</option>
              <option value="ro-RO">Romanian (Romania)</option>
              <option value="ru">Russian</option>
              <option value="ru-RU">Russian (Russia)</option>
              <option value="rw-RW">Kinyarwanda (Rwanda)</option>
              <option value="sa">Sanskrit</option>
              <option value="sa-IN">Sanskrit (India)</option>
              <option value="sah-RU">Yakut (Russia)</option>
              <option value="se-FI">Sami (Northern) (Finland)</option>
              <option value="se-NO">Sami (Northern) (Norway)</option>
              <option value="se-SE">Sami (Northern) (Sweden)</option>
              <option value="si-LK">Sinhala (Sri Lanka)</option>
              <option value="sk">Slovak</option>
              <option value="sk-SK">Slovak (Slovakia)</option>
              <option value="sl">Slovenian</option>
              <option value="sl-SI">Slovenian (Slovenia)</option>
              <option value="sma-NO">Sami (Southern) (Norway)</option>
              <option value="sma-SE">Sami (Southern) (Sweden)</option>
              <option value="smj-NO">Sami (Lule) (Norway)</option>
              <option value="smj-SE">Sami (Lule) (Sweden)</option>
              <option value="smn-FI">Sami (Inari) (Finland)</option>
              <option value="sms-FI">Sami (Skolt) (Finland)</option>
              <option value="sq">Albanian</option>
              <option value="sq-AL">Albanian (Albania)</option>
              <option value="sr">Serbian</option>
              <option value="sr-Cyrl-BA">Serbian (Cyrillic) (Bosnia and Herzegovina)</option>
              <option value="sr-Cyrl-CS">Serbian (Cyrillic) (Serbia and Montenegro (Former))</option>
              <option value="sr-Cyrl-ME">Serbian (Cyrillic) (Montenegro)</option>
              <option value="sr-Cyrl-RS">Serbian (Cyrillic) (Serbia)</option>
              <option value="sr-Latn-BA">Serbian (Latin) (Bosnia and Herzegovina)</option>
              <option value="sr-Latn-CS">Serbian (Latin) (Serbia and Montenegro (Former))</option>
              <option value="sr-Latn-ME">Serbian (Latin) (Montenegro)</option>
              <option value="sr-Latn-RS">Serbian (Latin) (Serbia)</option>
              <option value="sv">Swedish</option>
              <option value="sv-FI">Swedish (Finland)</option>
              <option value="sv-SE">Swedish (Sweden)</option>
              <option value="sw">Kiswahili</option>
              <option value="sw-KE">Kiswahili (Kenya)</option>
              <option value="syr">Syriac</option>
              <option value="syr-SY">Syriac (Syria)</option>
              <option value="ta">Tamil</option>
              <option value="ta-IN">Tamil (India)</option>
              <option value="te">Telugu</option>
              <option value="te-IN">Telugu (India)</option>
              <option value="tg-Cyrl-TJ">Tajik (Cyrillic) (Tajikistan)</option>
              <option value="th">Thai</option>
              <option value="th-TH">Thai (Thailand)</option>
              <option value="tk-TM">Turkmen (Turkmenistan)</option>
              <option value="tn-ZA">Setswana (South Africa)</option>
              <option value="tr">Turkish</option>
              <option value="tr-TR">Turkish (Turkey)</option>
              <option value="tt">Tatar</option>
              <option value="tt-RU">Tatar (Russia)</option>
              <option value="tzm-Latn-DZ">Tamazight (Latin) (Algeria)</option>
              <option value="ug-CN">Uyghur (People's Republic of China)</option>
              <option value="uk">Ukrainian</option>
              <option value="uk-UA">Ukrainian (Ukraine)</option>
              <option value="ur">Urdu</option>
              <option value="ur-PK">Urdu (Islamic Republic of Pakistan)</option>
              <option value="uz">Uzbek</option>
              <option value="uz-Cyrl-UZ">Uzbek (Cyrillic) (Uzbekistan)</option>
              <option value="uz-Latn-UZ">Uzbek (Latin) (Uzbekistan)</option>
              <option value="vi">Vietnamese</option>
              <option value="vi-VN">Vietnamese (Vietnam)</option>
              <option value="wo-SN">Wolof (Senegal)</option>
              <option value="xh-ZA">isiXhosa (South Africa)</option>
              <option value="yo-NG">Yoruba (Nigeria)</option>
              <option value="zh-Hans">Chinese (Simplified)</option>
              <option value="zh-Hant">Chinese (Traditional)</option>
              <option value="zh-CN">Chinese (People's Republic of China)</option>
              <option value="zh-HK">Chinese (Hong Kong S.A.R.)</option>
              <option value="zh-MO">Chinese (Macao S.A.R.)</option>
              <option value="zh-SG">Chinese (Singapore)</option>
              <option value="zh-TW">Chinese (Taiwan)</option>
              <option value="zu-ZA">isiZulu (South Africa)</option>
          </SelectField>
          <SelectField
            className="col-span-full"
            label="How did you hear about us?"
            id="referral_source"
            name="referral_source"
          >
            <option value="cio-ts">Customer.io's Technical Support Team</option>
            <option value="cio-cs">Customer.io's Customer Success Team</option>
            <option value="external">A Colleague</option>
          </SelectField>
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Sign up <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}


