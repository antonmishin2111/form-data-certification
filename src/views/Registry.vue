<template>
  <div class="tw-my-0 tw-mx-auto">
    <div class="tw-bg-white tw-py-3 tw-px-6 login tw-xs:tw-min-w-max">
      <h1 class="tw-text-center tw-mb-3">Регистрация пользователя</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="157px"
        label-position="left"
        class=""
        size="medium"
      >
        <el-form-item label="Email" prop="email">
          <el-input
            v-model="ruleForm.email"
            clearable
            placeholder="Email"
          ></el-input>
        </el-form-item>
        <el-form-item label="Пароль" prop="password" class="tw-mb-8">
          <el-input
            v-model="ruleForm.password"
            show-password
            clearable
            placeholder="Пароль"
          ></el-input>
        </el-form-item>
        <el-form-item label="Полное имя" prop="name">
          <el-input
            v-model="ruleForm.name"
            clearable
            placeholder="Введите Фамилию и Имя полностью"
          ></el-input>
        </el-form-item>
        <el-form-item label="Эксперт ООО ЦДС?" prop="firma">
          <el-select v-model="ruleForm.firma" placeholder="Эксперт ООО ЦДС?">
            <el-option label="Да" value="Yes"></el-option>
            <el-option label="Нет" value="No"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >Зарегистрироваться</el-button
          >
          <el-button @click="resetForm('ruleForm')">Очистить поля</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        email: "",
        firma: "",
        name: "",
        password: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Поле не может быть пустым, заполните его",
            trigger: "blur"
          },
          {
            min: 6,
            message: "Введите имя фамилию и имя полностью",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Пожалуйста, введите email",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Введите коррекный Email",
            trigger: "blur"
          }
        ],
        firma: [
          {
            required: true,
            message: "Выберите значение",
            trigger: "change"
          }
        ],
        password: [
          {
            required: true,
            message: "Введите пароль",
            trigger: "blur"
          },
          {
            min: 6,
            max: 10,
            message: "Длина пароля не может быть менее 6 символов и длинее 10",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          // console.log("error submit!!");
          return false;
        }

        try {
          await this.$store.dispatch("register", {
            email: this.ruleForm.email,
            password: this.ruleForm.password,
            firma: this.ruleForm.firma,
            name: this.ruleForm.name
          });
          this.$router.push("/");
        } catch (e) {
          // console.log(e.message);
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.login {
  min-width: 490px;
}
</style>
