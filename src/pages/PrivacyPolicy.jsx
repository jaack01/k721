import Footer from '../components/common/Footer'

const PrivacyPolicy = () => {
  return (
    <>
      <div className='bg-white min-h-screen text-black'>
        <div className='max-w-[900px] mx-auto px-6 lg:px-12 pt-40 pb-24'>
          <h1 className='font-[font2] text-5xl md:text-6xl lg:text-7xl uppercase leading-tight mb-12'>
            Politique de confidentialite
          </h1>

          <div className='font-[font1] text-base md:text-lg leading-relaxed space-y-12'>
            <section>
              <h2 className='font-[font2] text-2xl md:text-3xl uppercase mb-4'>1. Introduction</h2>
              <p className='text-black/70'>
                Plus Compagnie Ameriques inc. (faisant affaire sous le nom K72) s'engage a proteger la vie privee de ses utilisateurs. La presente politique de confidentialite explique comment nous collectons, utilisons, divulguons et protegeons vos renseignements personnels lorsque vous visitez notre site Web k72.ca.
              </p>
            </section>

            <section>
              <h2 className='font-[font2] text-2xl md:text-3xl uppercase mb-4'>2. Renseignements collectes</h2>
              <p className='text-black/70 mb-4'>Nous pouvons recueillir les types de renseignements suivants :</p>
              <ul className='list-disc list-inside text-black/70 space-y-2 ml-4'>
                <li>Renseignements d'identification (nom, adresse courriel, numero de telephone)</li>
                <li>Renseignements professionnels (nom de l'entreprise, titre du poste)</li>
                <li>Donnees de navigation (adresse IP, type de navigateur, pages consultees)</li>
                <li>Temoins de connexion (cookies) et technologies similaires</li>
                <li>Toute information que vous nous fournissez volontairement via nos formulaires</li>
              </ul>
            </section>

            <section>
              <h2 className='font-[font2] text-2xl md:text-3xl uppercase mb-4'>3. Utilisation des renseignements</h2>
              <p className='text-black/70 mb-4'>Nous utilisons vos renseignements personnels aux fins suivantes :</p>
              <ul className='list-disc list-inside text-black/70 space-y-2 ml-4'>
                <li>Repondre a vos demandes et vous fournir nos services</li>
                <li>Ameliorer notre site Web et personnaliser votre experience</li>
                <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                <li>Se conformer a nos obligations legales</li>
                <li>Proteger nos droits et interets legitimes</li>
              </ul>
            </section>

            <section>
              <h2 className='font-[font2] text-2xl md:text-3xl uppercase mb-4'>4. Partage des renseignements</h2>
              <p className='text-black/70'>
                Nous ne vendons pas vos renseignements personnels. Nous pouvons partager vos renseignements avec des fournisseurs de services tiers qui nous aident a exploiter notre site Web et a fournir nos services. Ces tiers sont tenus de proteger vos renseignements conformement a la presente politique et aux lois applicables.
              </p>
            </section>

            <section>
              <h2 className='font-[font2] text-2xl md:text-3xl uppercase mb-4'>5. Conservation</h2>
              <p className='text-black/70'>
                Nous conservons vos renseignements personnels aussi longtemps que necessaire pour atteindre les fins pour lesquelles ils ont ete collectes ou pour respecter nos obligations legales. Une fois que vos renseignements ne sont plus necessaires, nous les supprimerons ou les anonymiserons de maniere securisee.
              </p>
            </section>

            <section>
              <h2 className='font-[font2] text-2xl md:text-3xl uppercase mb-4'>6. Securite</h2>
              <p className='text-black/70'>
                Nous mettons en oeuvre des mesures de securite techniques et organisationnelles appropriees pour proteger vos renseignements personnels contre l'acces non autorise, la perte, la destruction ou l'alteration. Cependant, aucune methode de transmission sur Internet n'est entierement securisee.
              </p>
            </section>

            <section>
              <h2 className='font-[font2] text-2xl md:text-3xl uppercase mb-4'>7. Cookies</h2>
              <p className='text-black/70'>
                Notre site utilise des temoins de connexion (cookies) pour ameliorer votre experience de navigation. Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalites du site pourraient ne plus fonctionner correctement.
              </p>
            </section>

            <section>
              <h2 className='font-[font2] text-2xl md:text-3xl uppercase mb-4'>8. Vos droits</h2>
              <p className='text-black/70 mb-4'>Conformement aux lois applicables, vous avez le droit de :</p>
              <ul className='list-disc list-inside text-black/70 space-y-2 ml-4'>
                <li>Acceder a vos renseignements personnels</li>
                <li>Demander la rectification de renseignements inexacts</li>
                <li>Demander la suppression de vos renseignements</li>
                <li>Retirer votre consentement a tout moment</li>
                <li>Deposer une plainte aupres de l'autorite competente</li>
              </ul>
            </section>

            <section>
              <h2 className='font-[font2] text-2xl md:text-3xl uppercase mb-4'>9. Contact</h2>
              <p className='text-black/70'>
                Pour toute question concernant la presente politique ou pour exercer vos droits, veuillez nous contacter a :<br />
                <a href='mailto:bonjour@k72.ca' className='underline hover:text-black transition-colors'>bonjour@k72.ca</a>
              </p>
              <p className='text-black/70 mt-4'>
                525 Av. Viger O - Suite 400<br />
                Montreal, QC H2Z 1G6<br />
                Canada
              </p>
            </section>

            <section>
              <p className='text-black/40 text-sm'>
                Derniere mise a jour : Janvier 2025
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
