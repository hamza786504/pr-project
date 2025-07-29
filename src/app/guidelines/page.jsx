import React from 'react'
import CallToAction from '../Componenets/CallToAction'

function Guidelines() {
  return (
    <>
      <div className="py-12 md:max-w-3xl lg:max-w-4xl mx-auto">
        <h1 className="text-2xl text-purple-500 sm:text-3xl md:text-4xl font-semibold capitalize leading-tight text-center mb-6">
          Editorial guidelines
        </h1>
        <p className='text-sm md:text-base'>At King Newswire, our commitment to delivering a comprehensive array of news remains unwavering, encompassing diverse sectors ranging from commercial announcements to healthcare updates and beyond. Our core objective is to collaborate closely with each client, ensuring their digital press releases garner the utmost attention and impact. However, it is essential to establish clear editorial guidelines to maintain the integrity and credibility of the information we disseminate.</p>
        <h2 className="text-2xl text-purple-500 sm:text-3xl md:text-4xl font-semibold capitalize leading-tight text-start mt-8 mb-6">
          Title & summary
        </h2>
        <p>Ensure your headlines are succinct, using 8 to 17 words, as shorter, more precise headlines typically yield better results. Specifically for the Bloomberg + Yahoo package, maintain your press release headline under 110 characters.</p>
        <ul className='list-disc list-inside space-y-2 my-5'>
          <li>Utilize active verbs and phrases to create appealing headlines.</li>
          <li>Ensure that the headlines accurately represent the content of the press release.</li>
          <li>Avoid using special characters/symbols like &, %, TM, @, $, # or any symbols like that.</li>
          <li>Craft headlines that are interesting, relevant, and up-to-date in their announcements.</li>
          <li>Clearly describe the substance of the press release in the summary.</li>
          <li>Keep the summary concise and straightforward, with a maximum of 40 words, using only a few short phrases.</li>
        </ul>
        <h2 className="text-2xl my-4 font-bold text-purple-500">Acceptable Formation of a Press Release</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>The press release must have a clear newsworthy, corporate announcement from the company.</li>
          <li>It should not contain investment opinions or advice.</li>
          <li>The optimal length should be between 300 to 1500 words.</li>
          <li>Maintain objectivity and authority. Avoid first-person (I, we) and second-person (you) language.</li>
          <li>Use an announcement tone—avoid promotional content.</li>
          <li>Do not use JavaScript or scripting elements in formatting. Avoid `OL`, `LI`, or `TABLE` tags inside the actual content.</li>
          <li>Avoid Latin characters with diacritical marks (e.g., ā, ē, ī).</li>
          <li>Use quotes only from authentic and verified sources.</li>
          <li>Use full URLs (with http/https) for links, one link per 200 words max.</li>
          <li>Include relevant contact details for inquiries.</li>
          <li>Fill out the company details form with: full contact name, company name, email, country, state, and city.</li>
          <li>Proofread thoroughly to remove grammar and spelling issues.</li>
          <li>Ensure the content is free from XML issues.</li>
        </ul>

        <p>
          By adhering to these professional guidelines, your press release will convey information effectively
          and maintain a high standard of credibility and professionalism.
        </p>

        <h2 className="text-2xl font-bold my-4 text-purple-500">Company Contact Details</h2>
        <p>Provide the following information separately via the form (not within the press release body):</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Company Name</li>
          <li>Contact Person’s Full Name</li>
          <li>Company Website</li>
          <li>Company Webmail ID</li>
          <li>Contact Number (Optional)</li>
          <li>City, State, and Country</li>
        </ul>

        <h2 className="text-2xl font-bold my-4 text-purple-500">Acceptable Subject & Content of the Article</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>No SPAM-related terms or dispute-based content</li>
          <li>Content must be original (no plagiarism)</li>
          <li>No unlawful, obscene, or slanderous material</li>
          <li>No content promoting loans, adult content, dating, or firearms</li>
          <li>No pseudoscience, unverified therapies, or radical political/religious opinions</li>
          <li>No stock ticker symbols unless authorized</li>
          <li>Yahoo does not allow crypto-related content (replaced by other sites in such cases)</li>
          <li>No gambling, alcohol, drugs, or nicotine-free e-cigarettes</li>
          <li>Unregulated items like HCG or pirated software are not allowed</li>
          <li>No solely promotional or affiliate content</li>
          <li>No supplements, body alteration, legal cases, or famous personalities</li>
          <li>No government, political, or personality-based releases on top-tier sites</li>
          <li>Backlink type depends on news outlet policy (no-follow, do-follow, redirect, etc.)</li>
        </ul>

        <h2 className="text-2xl font-bold my-4 text-purple-500">Prohibited Content</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Advertorials or over-promotional content</li>
          <li>Sexual or illegal content</li>
          <li>Blog-style content or open letters</li>
          <li>CBD or unregulated health supplement promotion</li>
          <li>Harmful, defamatory, or poor-quality content</li>
          <li>Music and copyright-infringing tokens/NFTs</li>
          <li>Forged or fraudulent submissions will result in account suspension</li>
          <li>Content intended to damage others' reputation is not accepted</li>
        </ul>

        <p>
          To ensure approval, please comply with all above restrictions. King Newswire prioritizes credible, relevant, and
          high-quality content for its readers.
        </p>

        <h2 className="text-2xl font-bold my-4 text-purple-500">Disclaimer</h2>
        <p>
          King Newswire reserves the right to approve, disapprove, or remove content without notice. Each news platform
          has its own guidelines—publication across all listed sites cannot be guaranteed.
        </p>
        <p>
          Published press releases cannot be edited or removed. Under special circumstances, a removal request may be
          honored with an additional fee.
        </p>

        <h2 className="text-2xl font-bold my-4 text-purple-500">Review and Publication Process</h2>
        <p>
          The review and publication process may take up to 72 hours, including editorial review (within 24 hours) and
          link report delivery (within 24–48 working hours).
        </p>

      </div>

      <CallToAction />
    </>
  )
}

export default Guidelines
