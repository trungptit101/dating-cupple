<template>
  <div class="about-us">
    <TopBanner @openFormRegister="openFormRegister" :otherHome="true" />
    <div class="content">
      <div class="title">Visicupid là ai?</div>
      <div class="title-des">#ViSiCupid là gì?</div>
      <div class="description">
        ViSiCupid là một trang web mở rộng giúp những bạn độc thân đến tuổi lập
        gia đình mà đang tìm kiếm một nửa của mình ở đâu đó mà duyên tơ hồng
        chưa tìm được, chúng tôi mong muốn cung cấp dich vụ thân thiện này để
        kết hợp với các phương tiện tìm kiếm qua chọn lọc hồ sơ nghiêm túc để
        giúp bạn tìm đến một tình yêu đích thực của bạn để trở thành người bạn
        đời mà bạn đang mong đợi.
      </div>

      <div class="title-des">#Tại sao lại phải nhờ đến ViSiCupid?</div>
      <div class="description">
        ViSiCupid cung cấp dịch vụ thông tin cá nhân với công nghệ mới nhất,
        hoàn toàn bảo mật và đảm bảo quyền riêng tư cho bạn. Chuyên viên chuyên
        nghiệp được đào tạo qua trường lớp quốc tế. Dịch vụ được đăng ký bởi
        pháp lý nhà nước bảo vệ.
      </div>

      <div class="title-des">
        #Lợi ích khi và kết quả sử dụng dịch vụ ViSiCupid!
      </div>
      <div class="description">
        Bạn hoàn toàn chủ động thời gian, không phát sinh rủi ro ngoài ý muốn
        (nếu như bạn thực hiện quy định của ViSiCupid). Thao tác đăng ký hồ sơ
        mọi lúc mọi nơi trong thời gian không quá 10 phút. bảo vệ tuyệt mật.
        Ngoài ra hồ sơ của bạn hoàn thành sớm nhất được ưu tiên chuyên viên hỗ
        trợ trực tiếp chu đáo và cẩn thận để bạn đi đến con đường hạnh phúc mà
        bạn chọn. không những vậy ViSiCupid có
        <a
          href="https://www.huyenhocchanquang.com/"
          target="_blank"
          style="color: #0029ff; text-decoration: underline"
          >chuyên gia phong thuỷ và mệnh lý học</a
        >
        hỗ trợ nếu bạn có yêu cầu.
      </div>

      <div class="title-des"># Liên hệ với ViSiCupid</div>
      <div class="description">
        Xin bạn đừng ngần ngại, hãy lên hệ với ViSiCupid nếu bạn có bất kỳ câu
        hỏi nào liên quan đến trang web này. Vui lòng nhấn
        <a
          class="font-bold"
          style="color: #0029ff; text-decoration: underline"
          @click="isDisplayFormContactUs = true"
          >vào đây</a
        >
        để liên hệ với ViSiCupid.
      </div>

      <div style="font-size: 22px; font-weight: 500; padding: 10px 0 5px 0">
        Cảm ơn bạn đã tìm đến ViSiCupid
      </div>
      <div style="font-size: 22px; font-weight: 500; padding: 5px 0">
        Chúc bạn một ngày cũng như mọi ngày luôn tràn đầy năng lượng sống - lạc
        quan - yêu đời
      </div>
    </div>
    <Footer />
    <el-dialog
      :close-on-click-modal="false"
      title="Contact Us"
      :visible.sync="isDisplayFormContactUs"
    >
      <div class="text-center" style="font-size: 24px">Customer Service</div>
      <el-form
        :model="form"
        ref="ruleFormRef"
        :rules="rules"
        label-position="top"
      >
        <el-form-item label="Email" prop="email">
          <el-input
            size="large"
            placeholder="Email"
            v-model="form.email"
          ></el-input>
        </el-form-item>
        <el-form-item label="Contact" prop="contact">
          <el-input
            size="large"
            placeholder="Phone Number"
            v-model="form.contact"
          ></el-input>
        </el-form-item>
        <el-form-item label="Issue" prop="issue">
          <el-input size="large" v-model="form.issue"></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input
            size="large"
            type="textarea"
            rows="5"
            v-model="form.description"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="warning"
            class="col-12 btn-bg"
            size="large"
            :loading="loading"
            @click="submitForm('ruleFormRef')"
            >Submit</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import TopBanner from "@/layout/components/TopBanner.vue";
import Footer from "@/layout/components/Footer.vue";
import { createContact } from "@/api/contact";
import { Message } from "element-ui";
export default {
  components: { TopBanner, Footer },
  data() {
    return {
      isDisplayFormContactUs: false,
      loading: false,
      form: {},
      rules: {
        email: [
          {
            required: true,
            message: "Please enter your email",
            trigger: "blur",
          },
        ],
        contact: [
          {
            required: true,
            message: "Please enter your contact phone",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    openFormRegister() {
      this.isDisplayRegisterServey = true;
    },
    async submitForm(formEl) {
      await this.$refs[formEl].validate((valid, fields) => {
        if (valid) {
          console.log("submit!", this.form);
          this.loading = true;
          createContact(this.form).then((res) => {
            this.loading = false;
            Message({
              message:
                "Contact created successfully. Admin will contact you later!",
              type: "success",
              duration: 1000,
            });
            this.isDisplayFormContactUs = false;
          });
        } else {
          console.log("error submit!", fields);
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.about-us {
  .content {
    padding: 5vh;
    .title {
      font-size: 28px;
      text-align: center;
      padding-bottom: 30px;
    }
    .title-des {
      font-size: 22px;
      padding: 20px 0 10px 0;
    }
    .description {
      font-size: 16px;
    }
  }
}
</style>
