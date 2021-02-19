<template>
<div id="toggle">
<input type="checkbox" id="theme-toggle"
        :title="theme == 'dark' ? 'Dark Theme' : 'Light Theme'"
         v-model="checked"
        @change="toggleTheme()"
        class="theme"
    >
    <label for="theme-toggle">
        <span class="light"></span>
        <span class="dark"></span>
    </label>
</div>
</template>

<script>
import '../stylesheet/theme.scss';

    export default {
        data() {
            return {
                theme: localStorage.getItem("theme")
            };
        },
        methods: {
            toggleTheme() {
                if (this.theme == "dark") {
                    this.theme = "light";
                    document.body.setAttribute("data-theme", "light");
                    localStorage.setItem("theme", "light");
                } else {
                    this.theme = "dark";
                    document.body.setAttribute("data-theme", "dark");
                    localStorage.setItem("theme", "dark");
                }
            }
        }
    };
</script>