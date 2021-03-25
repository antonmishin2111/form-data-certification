<template>
  <el-row type="flex" justify="center">
    <el-col class="el-row-width">
      <h1>Вход в систему</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="90px"
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
        <el-form-item label="Пароль" prop="password">
          <el-input
            v-model="ruleForm.password"
            show-password
            clearable
            placeholder="Пароль"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >Войти</el-button
          >
          <el-button @click="resetForm('ruleForm')">Очистить поля</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        email: "",
        firma: "",
        password: ""
      },
      rules: {
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
          console.log("error submit!!");
          return false;
        }

        try {
          await this.$store.dispatch("login", {
            email: this.ruleForm.email,
            password: this.ruleForm.password
          });
          this.$router.push("/");
        } catch (e) {
          console.log(e.message);
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
h1 {
  text-align: center;
}

.el-row {
  margin: 0 auto;
}
.el-row-width {
  min-width: 490px;
  background: white;
  padding: 10px 30px;
}
</style>
