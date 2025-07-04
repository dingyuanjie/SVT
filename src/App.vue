<script setup lang="ts">
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
import Markdown from './Markdown.vue'
import { ref, onMounted, watch } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const data = ref('')
const handleClick = async (svt: any) => {
  try {
    const response = await fetch(`/md/${svt}.md`)
    data.value = await response.text()
  } catch (error) {
    console.error('Failed to load markdown content:', error)
  }
}
onMounted(() => {
  handleClick('structural_generative_force_theory')
})

// 监听 data，每次内容变化后触发 MathJax 渲染
watch(data, () => {
  // @ts-ignore
  if (window.MathJax && window.MathJax.typeset) {
    window.MathJax.typeset()
  }
})
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1" @click="handleClick('structural_generative_force_theory')"
      >structural_generative_force_theory</el-menu-item
    >
    <el-sub-menu index="000">
      <template #title>contact</template>
      <el-menu-item index="000-1" @click="handleClick('LICENSE')">LICENSE</el-menu-item>
      <el-menu-item index="000-2" @click="handleClick('README')">README</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2" @click="handleClick('Structure-Coupled Curve Theory Derivation')"
      >Structure-Coupled Curve Theory Derivation</el-menu-item
    >
    <el-menu-item index="3" @click="handleClick('theory_overview')">theory_overview</el-menu-item>
    <el-menu-item
      index="4"
      @click="handleClick('Variable Speed of Light Derivation Structural Vital Force v5')"
      >Variable Speed of Light Derivation Structural Vital Force v5</el-menu-item
    >
    <el-menu-item index="400-1" @click="handleClick('Structural Vital Force Homogeneous Scaling')"
      >Structural Vital Force Homogeneous Scaling</el-menu-item
    >
    <el-menu-item index="400-2" @click="handleClick('Structural Vital Force Homogeneous Scaling2')"
      >Structural Vital Force Homogeneous Scaling2</el-menu-item
    >
    <el-menu-item
      index="400-3"
      @click="handleClick('Structure Vital Force Perspective on Solar Fusion')"
      >Structure Vital Force Perspective on Solar Fusion</el-menu-item
    >
    <el-sub-menu index="100">
      <template #title>Time–Mass–Energy Triangle Hypothesis</template>
      <el-menu-item index="100-1" @click="handleClick('Time–Mass–Energy Triangle Hypothesis')"
        >Time–Mass–Energy Triangle Hypothesis</el-menu-item
      >
      <el-menu-item index="100-1" @click="handleClick('Scalability Across Scales')"
        >Scalability Across Scales</el-menu-item
      >
      <el-menu-item index="100-1" @click="handleClick('Time–Mass–Energy Triangle Hypothesis')"
        >Time–Mass–Energy Triangle Hypothesis</el-menu-item
      >
      <el-menu-item index="100-1" @click="handleClick('Time–Mass–Energy Triangle Hypothesis')"
        >Time–Mass–Energy Triangle Hypothesis</el-menu-item
      >
      <el-menu-item index="100-2" @click="handleClick('Preliminary Paper Draft')"
        >Preliminary Paper Draft</el-menu-item
      >
      <el-menu-item
        index="100-2-1-1"
        @click="handleClick('Structural Vital Force and Its Connection to Consciousness & AI')"
        >Structural Vital Force and Its Connection to Consciousness & AI</el-menu-item
      >
      <el-menu-item
        index="100-2-1-2"
        @click="handleClick('Structural Vital Force Derivation of Earths Crustal Motion')"
        >Structural Vital Force Derivation of Earth's Crustal Motion</el-menu-item
      >
      <el-menu-item
        index="100-2-1-3"
        @click="handleClick('Structural Vital Force Perspective on Atmospheric Motion')"
        >Structural Vital Force Perspective on Atmospheric Motion</el-menu-item
      >
      <el-menu-item
        index="100-2-1-4"
        @click="handleClick('Structural Vital Force Perspective on Oceanic Motion')"
        >Structural Vital Force Perspective on Oceanic Motion</el-menu-item
      >

      <el-menu-item
        index="100-2-1-5"
        @click="handleClick('Structural Vital Force-Based Derivation of Consciousness Structure')"
        >Structural Vital Force-Based Derivation of Consciousness Structure</el-menu-item
      >

      <el-menu-item
        index="100-2-1"
        @click="
          handleClick('Prediction of Sub-Quark Structures via Isofrequency Scaling Hypothesis')
        "
        >Prediction of Sub-Quark Structures via Isofrequency Scaling Hypothesis</el-menu-item
      >
      <el-menu-item index="100-2-2" @click="handleClick('newtonian_experiments_en')"
        >newtonian_experiments_en</el-menu-item
      >
      <el-menu-item index="100-2-3" @click="handleClick('newtonian_experiments_2_en')"
        >newtonian_experiments_2_en</el-menu-item
      >
      <el-menu-item
        index="100-2-4"
        @click="handleClick('Mathematical Assumptions and Structural Vital Force Formulas v1~v5')"
        >Mathematical Assumptions and Structural Vital Force Formulas v1~v5</el-menu-item
      >
      <el-menu-item index="100-2-4" @click="handleClick('Isofrequency Scaling Hypothesis')"
        >Isofrequency Scaling Hypothesis</el-menu-item
      >

      <el-sub-menu index="100-4">
        <template #title>relativity_experiments_en</template>
        <el-menu-item index="100-4-1" @click="handleClick('relativity_experiments_en')"
          >relativity_experiments_en</el-menu-item
        >
        <el-menu-item index="100-4-2" @click="handleClick('relativity_experiments_2_en')"
          >relativity_experiments_2_en</el-menu-item
        >
        <el-menu-item index="100-4-3" @click="handleClick('quantum_experiments_en')"
          >quantum_experiments_en</el-menu-item
        >
        <el-menu-item
          index="100-4-1"
          @click="handleClick('quantum_experiments_for_structural_force')"
          >quantum_experiments_for_structural_force</el-menu-item
        >
      </el-sub-menu>
    </el-sub-menu>

    <el-menu-item
      index="200"
      @click="handleClick('From Quantum to Cosmos Structural Vital Force in the Fibonacci Spiral')"
      >From Quantum to Cosmos Structural Vital Force in the Fibonacci Spiral</el-menu-item
    >
    <el-menu-item index="200-1" @click="handleClick('ExperimentalPlans')"
      >ExperimentalPlans</el-menu-item
    >
    <el-menu-item index="200-2" @click="handleClick('ExperimentalPlans_Full')"
      >ExperimentalPlans_Full</el-menu-item
    >
    <el-menu-item index="200-3" @click="handleClick('CoreFormulas')">CoreFormulas</el-menu-item>
    <el-menu-item
      index="200-4"
      @click="handleClick('Derivation of Structural Coupling Curve Theory')"
      >Derivation of Structural Coupling Curve Theory</el-menu-item
    >
    <el-menu-item
      index="200-5"
      @click="handleClick('Hydrogen Atom Level Transition Derivation (with SVF perspective)')"
      >Hydrogen Atom Level Transition Derivation (with SVF perspective)</el-menu-item
    >
    <el-menu-item
      index="200-6"
      @click="
        handleClick(
          'Hydrogen Atom Transition Derivation Structural Vital Force v5 vs Traditional Quantum Mechanics',
        )
      "
      >Hydrogen Atom Transition Derivation Structural Vital Force v5 vs Traditional Quantum
      Mechanics</el-menu-item
    >
    <el-sub-menu index="300">
      <template #title>Calculation Structural Vital Force v5 vs Newtonian Mechanics</template>
      <el-menu-item
        index="300-1"
        @click="
          handleClick(
            'First Cosmic Velocity Calculation Structural Vital Force v5 vs Newtonian Mechanics',
          )
        "
        >First Cosmic Velocity Calculation Structural Vital Force v5 vs Newtonian
        Mechanics</el-menu-item
      >
      <el-menu-item
        index="300-2"
        @click="
          handleClick(
            'Second Cosmic Velocity Calculation Structural Vital Force v5 vs Newtonian Mechanics',
          )
        "
        >Second Cosmic Velocity Calculation Structural Vital Force v5 vs Newtonian
        Mechanics</el-menu-item
      >
      <el-menu-item
        index="3200-3"
        @click="
          handleClick(
            'Third Cosmic Velocity Calculation Structural Vital Force v5 vs Newtonian Mechanics',
          )
        "
        >Third Cosmic Velocity Calculation Structural Vital Force v5 vs Newtonian
        Mechanics</el-menu-item
      >
      <el-menu-item
        index="300-4"
        @click="
          handleClick(
            'Fourth Cosmic Velocity Calculation Structural Vital Force v5 vs Newtonian Mechanics',
          )
        "
        >Fourth Cosmic Velocity Calculation Structural Vital Force v5 vs Newtonian
        Mechanics</el-menu-item
      >

      <el-menu-item
        index="300-5"
        @click="
          handleClick(
            'Fifth Cosmic Velocity Calculation Structural Vital Force v5 vs Newtonian Mechanics',
          )
        "
        >Fifth Cosmic Velocity Calculation Structural Vital Force v5 vs Newtonian
        Mechanics</el-menu-item
      >
      <el-menu-item
        index="300-6"
        @click="
          handleClick(
            'Sixth Cosmic Velocity Calculation Structural Vital Force v5 vs Newtonian Mechanics',
          )
        "
        >Sixth Cosmic Velocity Calculation Structural Vital Force v5 vs Newtonian
        Mechanics</el-menu-item
      >
    </el-sub-menu>
  </el-menu>
  <!-- <v-md-editor v-model="data" height="100%" mode="preview" right-toolbar="preview"></v-md-editor> -->

  <Markdown v-model:value="data" style="width: 100%; overflow-y: scroll"></Markdown>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>联系我们</h3>
        <p>微信QQ：911260800</p>
        <p>Email：911260800@qq.com</p>
      </div>
      <div class="footer-section">
        <h3>关于我们</h3>
        <p>当前版本：v1.0.0</p>
        <p>最后更新：2025-06-29</p>
        <p>技术支持：Vue3 + Element Plus + Vite</p>
      </div>
      <div class="footer-section">
        <h3>相关链接</h3>
        <p>
          <a href="https://github.com/dingyuanjie/StructureVitalityTheory" target="_blank"
            >GitHub 仓库</a
          >
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright © 2023-2024 Structural Vital Force Theory</p>
      <p>
        <a href="https://beian.miit.gov.cn/" target="_blank"
          >备案/许可证编号为：鄂ICP备2025127028号</a
        >
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 3rem 0 1rem;
  margin-top: 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 0 2rem;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-section {
  flex: 1;
  min-width: 250px;
}

.footer-section h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-section p {
  color: #666;
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

.footer-section a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #409eff;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.footer-bottom p {
  color: #999;
  font-size: 0.8rem;
  margin: 0.5rem 0;
}

.footer-bottom a {
  color: #999;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-bottom a:hover {
  color: #409eff;
}
</style>
