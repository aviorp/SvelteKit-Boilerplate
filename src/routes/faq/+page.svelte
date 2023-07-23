<script>
  
  import { Accordion, AccordionItem } from "flowbite-svelte";
</script>

<main>

    <h1 class="text-center text-2xl mt-4 mb-8 dark:text-white">
      Frequently Asked Questions
    </h1>

    <Accordion>
      <AccordionItem>
        <span slot="header">Is it safe to use?</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Yes, the bot utilizes different IP addresses for each vote, ensuring
          that it remains separate from your personal accounts and activities.
        </p>
      </AccordionItem>
      <AccordionItem>
        <span slot="header"> Is it worth the money?</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Consider the benefits: with this bot, you can earn vote credits on a
          daily basis. Let's say you have multiple accounts, and each day you
          accumulate a total of X vote credits per account. If you have Y
          accounts, the combined daily vote credits would be X * Y. Over a
          month, this would result in approximately Z vote credits. By
          exchanging these vote credits, you can gain various advantages or
          rewards, which can be quite valuable. Ultimately, for just €5 per
          month, the potential benefits you can obtain through these vote
          credits may make it worth the investment.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
          necessitatibus sint explicabo ...
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul class="list-disc pl-5 dark:text-gray-400 text-gray-500">
          <li>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >Lorem ipsum</a
            >
          </li>
          <li>
            <a
              href="https://tailwindui.com/"
              rel="noreferrer"
              target="_blank"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >Tailwind UI</a
            >
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem>
        <span slot="header"> How can I play safely and avoid get banned? </span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          ensuring To minimize the risk of penalties or account bans, it is
          advisable to follow these precautions:
        </p>
        <div class="collapse-content flex flex-col gap-4">
          <p class="dark:text-white">
            To minimize the risk of penalties or account bans, it is advisable
            to follow these precautions:
          </p>
          <ul>
            <li class="dark:text-white">
              Avoid logging in to your accounts from the same IP address, MAC
              address, and volume ID.
            </li>
            <li class="dark:text-white">
              Utilize a different computer or a virtual machine (VM) with
              distinct IP/MAC/volume ID settings.
            </li>
            <li class="dark:text-white">
              Always make use of a reliable VPN service to conceal your IP
              address during the voting process.
            </li>
            <li class="dark:text-white">
              Level up your accounts to a certain threshold, such as level 15,
              before adding them to the voting dashboard.
            </li>
          </ul>
          <p class="dark:text-white">
            By implementing these safety measures, you can enhance your chances
            of maintaining a secure and sustainable voting strategy, reducing
            the likelihood of negative consequences.
          </p>
        </div>
      </AccordionItem>
    </Accordion>
  </main>
