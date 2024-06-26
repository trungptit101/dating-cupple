<template>
  <div class="dating-safety">
    <TopBanner :otherHome="true" />
    <div class="content">
      <h1 class="text-center">
        <span style="color: #4472c4; line-height: 40px">{{
          $t("Dating Safety Tips")
        }}</span>
      </h1>
      <p>
        {{
          $t(
            "At Visicupid.com, your safety is our top priority. While we strive to create a safe environment for our members, it's important to take precautions when meeting new people online and offline. Here are some essential tips to help you stay safe while dating."
          )
        }}
      </p>
      <h2>
        <span style="color: #4472c4">{{ $t("Online Dating Safety") }}</span>
      </h2>
      <ol style="padding-left: 48px">
        <li>
          <p>
            <strong>{{ $t("Protect Your Personal Information") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Avoid sharing personal details such as your home address, phone number, financial information, or work address until you feel completely comfortable."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "Use the messaging system within the website to communicate, rather than giving out your personal email or phone number."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>{{ $t("Be Cautious with Photos") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Be mindful of the photos you share. Avoid sharing photos that include personal details like your home, workplace, or frequent locations."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>{{ $t("Watch for Red Flags") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Be wary of anyone who asks for money, makes early declarations of love, or attempts to isolate you from friends and family."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "Report any suspicious behaviour to our customer support team."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>{{ $t("Take Your Time") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Don’t rush into meeting someone in person. Take the time to get to know them through the website's messaging system."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>{{ $t("Trust Your Instincts") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "If something feels off or makes you uncomfortable, trust your gut and take steps to protect yourself."
                )
              }}
            </li>
          </ul>
        </li>
      </ol>
      <h2>
        <span style="color: #4472c4">{{ $t("Meeting In Person") }}</span>
      </h2>
      <ol style="padding-left: 48px">
        <li>
          <p>
            <strong>{{ $t("Meet in Public Places") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Choose public locations like cafes, restaurants, or parks for your first few meetings."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "Avoid meeting at your home or your date’s home until you know them better."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>{{ $t("Inform a Friend or Family Member") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Tell someone you trust about your plans, including who you're meeting, where, and when."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "Consider sharing your location with them through your smartphone."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>{{ $t("Arrange Your Own Transportation") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Ensure you have your own means of transportation to and from the meeting location."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "Avoid getting into your date’s car or letting them pick you up from your home."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>{{ $t("Stay Sober") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Stay aware and in control by limiting your consumption of alcohol or avoiding substances that impair your judgment."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>{{ $t("Have a Backup Plan") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Plan for a safe way to leave if you feel uncomfortable. Keep some cash or a ride-sharing app ready in case you need to leave unexpectedly."
                )
              }}
            </li>
          </ul>
        </li>
      </ol>
      <h2>
        <span style="color: #4472c4">{{ $t("Online Safety Resources") }}</span>
      </h2>
      <ul style="list-style-type: disc">
        <li>
          <strong>{{ $t("Report Suspicious Behaviour") }}</strong
          >:
          {{
            $t(
              "If you encounter any suspicious behaviour or feel threatened, report it to us immediately."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Stay Updated on Safety Tips") }}</strong
          >:
          {{
            $t(
              "Regularly check our website for updated safety tips and resources."
            )
          }}
        </li>
      </ul>
      <h2>
        <span style="color: #4472c4">{{
          $t("Red Flags to Watch Out For")
        }}</span>
      </h2>
      <ul style="list-style-type: disc">
        <li>
          <strong>{{ $t("Requests for Financial Assistance") }}</strong
          >:
          {{
            $t(
              "Be cautious of anyone who asks for money, regardless of their story."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Inconsistent Information") }}</strong
          >:
          {{
            $t(
              "Pay attention to inconsistencies in their stories or personal information."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Overly Pushy Behaviour") }}</strong
          >:
          {{
            $t(
              "Be wary of someone who pressures you to meet or share personal details too soon."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Avoiding Questions") }}</strong
          >:
          {{
            $t(
              "If they evade your questions or refuse to provide basic information, this could be a red flag."
            )
          }}
        </li>
      </ul>
      <h2>
        <span style="color: #4472c4">{{ $t("Trust and Verify") }}</span>
      </h2>
      <ol>
        <li>
          <strong>{{ $t("Verify Information") }}</strong
          >:
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Use online resources to verify the information your date provides. You can do a quick search to ensure they are who they say they are."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <strong>{{ $t("Video Chat Before Meeting") }}</strong
          >:
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Consider having a video call before meeting in person. This helps verify their identity and establish a level of comfort."
                )
              }}
            </li>
          </ul>
        </li>
      </ol>
      <h2>
        <span style="color: #4472c4">{{ $t("Your Rights and Comfort") }}</span>
      </h2>
      <ul style="list-style-type: disc">
        <li>
          <strong>{{ $t("You Have the Right to Say No") }}</strong
          >:
          {{
            $t(
              "Never feel obligated to do something that makes you uncomfortable."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Take Breaks When Needed") }}</strong
          >:
          {{
            $t(
              "If you need time to think or reassess, take a break from communication and come back when you feel ready."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Seek Help") }}</strong
          >:
          {{
            $t(
              "If you ever feel threatened or in immediate danger, contact local authorities immediately."
            )
          }}
        </li>
      </ul>
      <p>
        {{
          $t(
            "By following these safety tips, you can enjoy a secure and enjoyable dating experience. At Visicupid, we're here to support you every step of the way. If you have any questions or need assistance, please contact our customer support team"
          )
        }}
        <span style="color: #4472c4">jenbusiness.sg@gmail.com</span>
      </p>
      <p>
        {{ $t("Stay safe and happy dating!") }}
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
import TopBanner from "@/layout/components/TopBanner.vue";
import Footer from "@/layout/components/Footer.vue";
export default {
  components: { TopBanner, Footer },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.dating-safety {
  .content {
    text-align: justify;
    padding: 2vh 5vw;
    line-height: 25px;
    font-size: 18px;
    ol li {
      padding: 5px 0;
    }
  }
}
</style>
