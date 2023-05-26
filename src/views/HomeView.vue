<script setup>
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import { ref, onMounted } from "vue";
import "grapesjs-preset-webpage";
// import { componentBlocks } from "../assets/blocks.js";
// import IconComputer from "../components/icons/IconComputer.vue";
// import IconTablet from "../components/icons/IconTablet.vue";
// import IconMobile from "../components/icons/IconMobile.vue";
// import IconCode from "../components/icons/IconCode.vue";
// import IconUndo from "../components/icons/IconUndo.vue";
// import IconRedo from "../components/icons/IconRedo.vue";
// import IconEye from "../components/icons/IconEye.vue";
// import IconTrash from "../components/icons/IconTrash.vue";
// import IconOutline from "../components/icons/IconOutline.vue";
// import IconRobot from "../components/icons/IconRobot.vue";

// const currentTab = ref("TheStyle");

const editor = ref(null);

onMounted(() => {
  editor.value = grapesjs.init({
    fromElement: true,
    container: "#gjs",
    plugins: ["gjs-preset-webpage"],
    pluginsOpts: {
      "gjs-preset-webpage": {
        /* ...options */
      },
    },
  });
});

// onMounted(() => {
//   editor.value = grapesjs.init({
//     container: "#gjs",
//     fromElement: true,
//     height: "100%",
//     width: "100%",

//     storageManager: {
//       id: "gjs-", // Prefix identifier that will be used on parameters
//       type: "local", // Type of the storage
//       autosave: true, // Store data automatically
//       autoload: true, // Autoload stored data on init
//       stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
//     },

//     canvas: {
//       styles: [],
//       scripts: ["https://cdn.tailwindcss.com"],
//     },
//     layerManager: {
//       appendTo: "#layering",
//     },
//     traitManager: {
//       appendTo: "#traiters",
//     },
//     styleManager: {
//       appendTo: "#stylus",
//     },
//     panels: {
//       defaults: [
//
//       ],
//     },
//     commands: {
//       defaults: [
//         {
//           id: "set-device-desktop",
//           run() {
//             editor.value.setDevice("Desktop");
//           },
//         },
//         {
//           id: "set-device-tablet",
//           run() {
//             editor.value.setDevice("Tablet");
//           },
//         },
//         {
//           id: "set-device-mobile",
//           run() {
//             editor.value.setDevice("Mobile");
//           },
//         },
//       ],
//     },
//     deviceManager: {
//       devices: [
//         {
//           name: "Desktop",
//           width: "", // default size
//         },
//         {
//           name: "Tablet",
//           width: "530px",
//           widthMedia: "768px", // default size
//         },
//         {
//           name: "Mobile",
//           width: "320px", // this value will be used on canvas width
//           widthMedia: "480px", // this value will be used in CSS @media
//         },
//       ],
//     },
//     blockManager: {
//       appendTo: "#blocks",
//       blocks: componentBlocks,
//     },
//     plugins: ["gjs-blocks-basic", "gjs-navbar"],
//     pluginsOpts: {
//       "gjs-navbar": {},
//       "gjs-blocks-basic": {
//         category: "Primitives",
//         blocks: [
//           "column1",
//           "column2",
//           "column3",
//           "text",
//           "link",
//           "image",
//           "video",
//         ],
//       },
//     },
//   });
// });

// function clearCanvas() {
//   if (editor.value) {
//     if (confirm("Are you sure you want to clear the canvas")) {
//       editor.value.runCommand("core:canvas-clear");
//     } else return;
//   }
// }

// function activateCommand(command) {
//   if (editor.value && editor.value.Commands.isActive(command)) {
//     editor.value.stopCommand(command);
//   } else editor.value.runCommand(command);
// }
</script>

<template>
  <div class="w-full text-white font-semibold" id="gjs">
    <!-- <nav class="w-full bg-[#001E26] h-[3rem] flex">
      <div
        class="h-full min-w-[13.5rem] max-w-[13.5rem] flex justify-between items-center text-[#00DC82] border-r border-black"
      >
        <span
          @click="currentTab = 'TheStyle'"
          class="text-center w-1/4 h-full flex items-center justify-center cursor-pointer text-xl"
          :class="currentTab == 'TheStyle' ? 'bg-[#012A35]' : 'bg-[#001E26]'"
        >
          <svg width="1.13em" height="1em" viewBox="0 0 576 512">
            <path
              fill="currentColor"
              d="M224 263.3c.2-30 14.4-58.1 38.4-76.1L499.1 9.605c18.6-13.958 44.5-12.57 61.6 3.295c17 15.86 20.1 41.64 7.5 61.17L406.5 324.1c-15.2 23.6-39.9 39.1-67.2 43L224 263.3zM320 400c0 61.9-50.1 112-112 112H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h4.81c17.63 0 29.59-18.9 27.78-36.4c-.39-3.8-.59-7.7-.59-11.6c0-60.4 47.9-109.7 107.7-111.9l116.1 104.4c.1 1.6.2 5 .2 7.5z"
            ></path>
          </svg>
        </span>

        <span
          @click="currentTab = 'TheLayers'"
          class="text-center w-1/4 h-full flex items-center justify-center cursor-pointer text-xl"
          :class="currentTab == 'TheLayers' ? 'bg-[#012A35]' : 'bg-[#001E26]'"
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
              d="M21.484 7.125l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5a1 1 0 0 0-.002-1.749z"
              fill="currentColor"
            ></path>
            <path
              d="M12 15.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5l-.971-1.748L12 15.856z"
              fill="currentColor"
            ></path>
            <path
              d="M12 19.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5l-.971-1.748L12 19.856z"
              fill="currentColor"
            ></path>
          </svg>
        </span>

        <span
          @click="currentTab = 'TheBlocks'"
          class="text-center w-1/4 h-full flex items-center justify-center cursor-pointer text-xl"
          :class="currentTab == 'TheBlocks' ? 'bg-[#012A35]' : 'bg-[#001E26]'"
        >
          <svg width="1em" height="1em" viewBox="0 0 36 36">
            <path
              fill="currentColor"
              d="m31.42 9.09l-13-6a1 1 0 0 0-.84 0l-13 6A1 1 0 0 0 4 10v17a1 1 0 0 0 .58.91l13 6a1 1 0 0 0 .84 0l13-6A1 1 0 0 0 32 27V10a1 1 0 0 0-.58-.91ZM18 14.9L7.39 10L18 5.1L28.61 10Zm12 11.46l-11 5.08v-14.8l11-5.08Z"
              class="clr-i-solid clr-i-solid-path-1"
            ></path>
            <path fill="none" d="M0 0h36v36H0z"></path>
          </svg>
        </span>
        <span
          @click="currentTab = 'TheTraits'"
          class="text-center w-1/4 h-full flex items-center justify-center cursor-pointer text-xl text-[#00DC82]"
          :class="currentTab == 'TheTraits' ? 'bg-[#012A35]' : 'bg-[#001E26]'"
        >
          <IconRobot />
        </span>
      </div>
      

      <div class="flex h-full w-full justify-between px-4 py-1 text-[#00DC82]">
        <div class="flex items-center justify-center space-x-3">
          <IconComputer
            class="cursor-pointer w-6 h-6"
            @click="activateCommand('set-device-desktop')"
          />
          <IconTablet
            class="cursor-pointer w-4.5 h-4.5"
            @click="activateCommand('set-device-tablet')"
          />
          <IconMobile
            class="cursor-pointer w-4 h-4"
            @click="activateCommand('set-device-mobile')"
          />
        </div>
        <div class="flex items-center justify-center space-x-4">
          <IconOutline
            @click="activateCommand('core:component-outline')"
            class="cursor-pointer w-4.9 h-4.9"
          />
          <IconUndo
            @click="activateCommand('core:undo')"
            class="cursor-pointer w-4.8 h-4.8"
          />
          <IconRedo
            @click="activateCommand('core:redo')"
            class="cursor-pointer w-4.8 h-4.8"
          />
          <IconCode
            @click="activateCommand('export-template')"
            class="cursor-pointer w-5 h-5"
          />
        </div>
        <div class="flex items-center justify-center space-x-4">
          <button
            @click="activateCommand('core:preview')"
            class="w-24 select-none hover:opacity-90 font-semibold flex space-x-2 cursor-pointer bg-[#00DC82] text-[#001E26] p-1 rounded text-sm items-center justify-center"
          >
            <span>Preview</span>
            <IconEye class="cursor-pointer w-5 h-5" />
          </button>
          <button
            @click="clearCanvas"
            class="w-24 select-none hover:opacity-90 font-semibold flex space-x-2 cursor-pointer bg-[#00DC82] text-[#001E26] p-1 rounded text-sm items-center justify-center"
          >
            <span>Clear</span>
            <IconTrash class="w-5 h-5" />
          </button>
        </div>
      </div>

      
    </nav>

    <section
      class="relative flex w-full h-[calc(100vh-3rem)] bg-gray-200 editor-row"
    >
      <aside
        v-show="currentTab == 'TheBlocks'"
        id="blocks"
        class="overflow-y-scroll myblocks h-full bg-[#001E26] w-[16rem] py-4 px-1 flex flex-col border-t border-black scrollbar-hide"
      ></aside>
      <aside
        v-show="currentTab == 'TheStyle'"
        id="stylus"
        class="overflow-y-scroll myblocks h-full bg-[#001E26] w-[16rem] py-4 px-1 flex flex-col border-t border-black scrollbar-hide"
      ></aside>
      <aside
        v-show="currentTab == 'TheLayers'"
        id="layering"
        class="overflow-y-scroll myblocks h-full bg-[#001E26] w-[16rem] py-4 px-1 flex flex-col border-t border-black scrollbar-hide"
      ></aside>
      <aside
        v-show="currentTab == 'TheTraits'"
        id="traiters"
        class="overflow-y-scroll myblocks h-full bg-[#001E26] w-[16rem] py-4 px-1 flex flex-col border-t border-black scrollbar-hide"
      ></aside>

      <main class="w-full overflow-hidden">
        <div id="gjs" class="scrollbar-hide h-[100vh-3rem]">
          <h1 class="text-center text-2xl p-4 text-[#001E26]">
            Made with love by Jimoh Sodiq
          </h1>
          <div class="flex flex-col space-y-3 px-12 text-[#001E26]">
            <div class="flex space-x-6 items-center">
              <svg width="1.13em" height="1em" viewBox="0 0 576 512">
                <path
                  fill="currentColor"
                  d="M224 263.3c.2-30 14.4-58.1 38.4-76.1L499.1 9.605c18.6-13.958 44.5-12.57 61.6 3.295c17 15.86 20.1 41.64 7.5 61.17L406.5 324.1c-15.2 23.6-39.9 39.1-67.2 43L224 263.3zM320 400c0 61.9-50.1 112-112 112H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h4.81c17.63 0 29.59-18.9 27.78-36.4c-.39-3.8-.59-7.7-.59-11.6c0-60.4 47.9-109.7 107.7-111.9l116.1 104.4c.1 1.6.2 5 .2 7.5z"
                ></path>
              </svg>
              <h2>style selected components</h2>
            </div>
            <div class="flex space-x-6 items-center">
              <svg width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  d="M21.484 7.125l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5a1 1 0 0 0-.002-1.749z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12 15.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5l-.971-1.748L12 15.856z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12 19.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5l-.971-1.748L12 19.856z"
                  fill="currentColor"
                ></path>
              </svg>
              <h2>view the componet layering</h2>
            </div>
            <div class="flex space-x-6 items-center">
              <svg width="1em" height="1em" viewBox="0 0 36 36">
                <path
                  fill="currentColor"
                  d="m31.42 9.09l-13-6a1 1 0 0 0-.84 0l-13 6A1 1 0 0 0 4 10v17a1 1 0 0 0 .58.91l13 6a1 1 0 0 0 .84 0l13-6A1 1 0 0 0 32 27V10a1 1 0 0 0-.58-.91ZM18 14.9L7.39 10L18 5.1L28.61 10Zm12 11.46l-11 5.08v-14.8l11-5.08Z"
                  class="clr-i-solid clr-i-solid-path-1"
                ></path>
                <path fill="none" d="M0 0h36v36H0z"></path>
              </svg>
              <h2>add new components</h2>
            </div>
            <div class="flex space-x-6 items-center">
              <IconRobot />
              <h2>add attributes to components</h2>
            </div>
            <div class="flex space-x-6 items-center">
              <IconOutline />
              <h2>toggle outline of components</h2>
            </div>
            <div class="flex space-x-6 items-center">
              <IconUndo />
              <h2>undo last action</h2>
            </div>
            <div class="flex space-x-6 items-center">
              <IconRedo />
              <h2>Redo last action</h2>
            </div>
            <div class="flex space-x-6 items-center">
              <IconCode />
              <h2>View page source code</h2>
            </div>

            <h2>Double click on any componet to edit or delete it</h2>
            <h2>
              Built for devices with large screen size, touch functionality is
              not enabled yet.
            </h2>
            <h2>Build different views for different screen sizes.</h2>
          </div>
          <h2
            @click="clearCanvas"
            class="font-bold mt-3 text-center text-xl bg-[#001E26] text-[#00dc82] hover:opacity-90 mx-auto w-fit select-none rounded cursor-pointer p-3"
          >
            Clear the canvas for a clean page
          </h2>
        </div>
      </main>
    </section> -->
  </div>
</template>

<style>
#gjs {
  overflow-y: scroll;
}

.gjs-block {
  width: 100%;
  min-height: 90px;
}

.gjs-cv-canvas {
  top: 0;
  width: 100%;
  height: 100%;
}

.panel__top {
  padding: 0;
  width: 100%;
  display: flex;
  position: initial;
  justify-content: flex-end;
  background-color: white;
  align-items: flex-end;
}
.panel__basic-actions {
  position: initial;
  background: transparent;
  color: #001e26;
  font-weight: bold;
}

.gjs-one-bg {
  background-color: #001e26;
}

/* Secondary color for the text color */
.gjs-two-color {
  color: #00dc82;
}

/* Tertiary color for the background */
.gjs-three-bg {
  background-color: rgb(2, 32, 5);
  color: #00dc82;
}

/* Quaternary color for the text color */
.gjs-four-color,
.gjs-four-color-h:hover {
  color: #00dc82;
}
</style>
