<template>
  <div class="portal d-flex align-items-start justify-start">
    <div class="portal__sidebar">
      <div
        class="portal__sidebar__overlay relative"
        :class="{ collapsed: collapse }"
      >
        <div
          class="portal__sidebar__collapse"
          :class="{ collapsed: collapse }"
          @click="collapse = !collapse"
        >
          <div class="relative d-flex">
            <img src="@/assets/svgs/sidebar-collapse.svg" alt="" />
          </div>
          <i class="icon-Arrow-Right" v-if="collapse" />
          <i class="icon-Arrow-Left" v-else />
        </div>
      </div>
      <el-menu
        class="portal__sidebar__menu"
        :class="{ collapsed: collapse }"
        :collapse="collapse"
        :default-active="currentSidebarRouter?.id?.toString()"
      >
        <div class="portal__sidebar__logo mb-24">
          <router-link
            :to="I18nUtils.i18nRouteByPath('/')"
            class="d-flex align-items-center justify-start"
          >
            <img src="@/assets/images/soha_icon.png" class="mr-22" style="width: 40px;"/>
            <div
              v-if="!collapse"
              class="flex-col d-flex justify-center align-items-start portal__sidebar__brand"
            >
              <p><span style="color: #A51C30">SOHA</span> EXPRESS</p>
            </div>
          </router-link>
        </div>
        <template v-for="menu in AllRouter">
          <el-sub-menu
            v-if="menu.children && !menu.hiddenChildren"
            :index="menu.id.toString()"
            :key="menu.id"
          >
            <template #title>
              <i :class="menu.icon" />
              <span class="portal__sidebar__menu__label ml-8">{{
                menu.label
              }}</span>
            </template>
            <el-menu-item
              v-for="childMenu in menu.children"
              :index="childMenu.id.toString()"
              :key="childMenu.id"
              @click="onSelectMenu(childMenu.path)"
              >{{ childMenu.label }}</el-menu-item
            >
          </el-sub-menu>
          <el-menu-item
            v-else
            :index="menu.id.toString()"
            :key="menu.id"
            class="rounded-sm mb-8"
            @click="onSelectMenu(menu.path)"
          >
            <i :class="menu.icon" />
            <span class="portal__sidebar__menu__label ml-8">{{
              menu.label
            }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <el-main>
      <div class="portal__container" :class="{ collapsed: collapse }">
        <div
          class="portal__header pt-16 pr-16 pb-16 pl-45 d-flex justify-between align-items-center"
        >
          <e-breadcrumb />
          <div
            class="portal__header__right d-flex align-items-center justify-end"
          >
            <c-notification class="mr-8" />
            Account
          </div>
        </div>
        <div class="portal__content">
          <router-view />
        </div>
      </div>
    </el-main>
  </div>
</template>

<script lang="ts" setup>
import { EBreadcrumb } from '@/components/Elements'
import { AllRouter } from '@/constants'
import { ref } from 'vue'
import { UseLayout } from '@/composables'
import CNotification from '@/components/Components/CNotification.vue'
import { UseDmsRouter } from '@/composables'
import { I18nUtils } from '@/utils'

const collapse = ref<boolean>(false)
const { currentSidebarRouter } = UseLayout()
const router = UseDmsRouter()
const onSelectMenu = (path: string): void => {
  router.pushByPath(path)
}
</script>

<style scoped lang="scss">
.portal {
  &__sidebar {
    z-index: 2;
    &__logo {
      a {
        color: var(--text-primary);
        font-size: 18px;
        font-weight: 600;
      }
    }
    &__overlay {
      width: 258px;
      min-width: 258px;
      height: 100vh;
      &.collapsed {
        width: 68px;
        min-width: 68px;
      }
    }
    &__collapse {
      position: fixed;
      left: 258px;
      top: calc(50vh - 55px);
      z-index: 1;
      cursor: pointer;
      &.collapsed {
        left: 68px;
      }
      i {
        font-size: 18px;
        position: absolute;
        color: var(--primary);
        top: calc(50% - 10px);
        right: 0;
      }
    }
    &__menu {
      --el-menu-item-height: 42px;
      --el-menu-base-level-padding: 8px;
      --el-menu-hover-bg-color: var(--primary-8);
      --el-menu-text-color: var(--text-secondary);
      --el-menu-sub-item-height: 42px;
      box-shadow: 0 4px 8px rgba(21, 36, 56, 0.15);
      position: fixed;
      width: 258px;
      height: 100vh;
      left: 0;
      top: 0;
      padding: 24px 16px;
      font-size: 14px;
      transition: unset;
      &.collapsed {
        width: 68px;
        .el-menu-item {
          width: 42px;
          justify-content: center;
          i {
            font-size: 20px;
          }
          .portal__sidebar__menu__label {
            display: none;
          }
        }
        .el-sub-menu {
          :deep(.el-sub-menu__title) {
            width: 42px;
          }
          .portal__sidebar__menu__label {
            display: none;
          }
          i {
            right: -2px;
            position: relative;
            font-size: 20px;
          }
        }
      }
      .el-menu-item {
        &.is-active {
          --el-menu-active-color: var(--text-primary-reverse);
          background: var(--primary);
        }
      }
      .el-sub-menu {
        :deep(.el-sub-menu__title) {
          border-radius: 6px;
        }
        .el-menu-item {
          border-radius: 6px;
        }
      }
    }
  }
  &__header {
    height: 90px;
    position: relative;
    z-index: 1;
    background-color: var(--background-primary);
    box-shadow: 0 4px 8px rgba(21, 36, 56, 0.15);
    &__title {
      font-size: 24px;
      font-weight: 700;
    }
  }
  &__content {
    height: calc(100vh - 90px);
    overflow: auto;
  }
}
</style>
