<template>
  <el-row type="flex" justify="center">
    <el-col class="el-row-width">
      <h1>Регистрация пользователя</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="150px"
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
          console.log("error submit!!");
          return false;
        }

        try {
          await this.$store.dispatch("register", {
            email: this.ruleForm.email,
            password: this.ruleForm.password,
            firma: this.ruleForm.firma
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
