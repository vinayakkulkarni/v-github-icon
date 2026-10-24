<template>
  <div class="relative flex min-h-dvh flex-col overflow-x-clip">
    <v-github-icon
      :url="repoUrl"
      position="top-right"
      :bg-color="isDark ? cornerDark.bg : cornerLight.bg"
      :fill-color="isDark ? cornerDark.fill : cornerLight.fill"
      @click="track('Outbound Click', { target: 'github', source: 'corner' })"
    />

    <header
      class="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 py-5 pr-24 pl-5 sm:pr-28 sm:pl-8"
    >
      <a href="/" class="text-lg font-bold tracking-tight">v-github-icon</a>
      <nav class="flex items-center gap-1 text-sm">
        <a
          href="https://www.npmjs.com/package/v-github-icon"
          target="_blank"
          rel="noopener noreferrer"
          :class="navLink"
          @click="track('Outbound Click', { target: 'npm' })"
        >
          npm
        </a>
        <button
          type="button"
          :class="navLink"
          :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
          @click="toggleTheme"
        >
          {{ isDark ? 'Light' : 'Dark' }}
        </button>
      </nav>
    </header>

    <main
      class="mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-5 pt-6 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-16"
    >
      <section class="min-w-0">
        <p class="font-mono text-xs tracking-widest text-muted uppercase">
          Vue 3 · ESM · v{{ version }}
        </p>
        <h1
          class="mt-4 text-5xl leading-none font-black tracking-tight sm:text-7xl"
        >
          The corner<br />
          <span class="font-light">that waves.</span>
        </h1>
        <p class="mt-6 max-w-md text-lg text-muted">
          The animated GitHub corner ribbon as one Vue 3 component. Pick a
          corner, pick two colours, and the octocat waves on hover. Look up and
          to the right.
        </p>

        <div
          class="mt-8 flex max-w-md items-center gap-2 rounded-lg border border-line bg-surface p-1.5 pl-4"
        >
          <code class="min-w-0 flex-1 truncate font-mono text-sm">
            <span class="text-muted select-none">$ </span>{{ installCommand }}
          </code>
          <button type="button" :class="primaryButton" @click="copyInstall">
            {{ copied === 'install' ? 'Copied' : 'Copy' }}
          </button>
        </div>
      </section>

      <section
        class="min-w-0 rounded-2xl border border-line bg-surface p-5 sm:p-6"
        aria-labelledby="demo-title"
      >
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 id="demo-title" class="font-bold">Try it</h2>
          <div
            class="flex rounded-md border border-line p-0.5 text-xs"
            role="radiogroup"
            aria-label="Corner position"
          >
            <button
              v-for="option in positions"
              :key="option"
              type="button"
              role="radio"
              :aria-checked="position === option"
              :class="segmentClass(position === option)"
              @click="setPosition(option)"
            >
              {{ option }}
            </button>
          </div>
        </div>

        <div
          class="relative mt-5 h-48 overflow-hidden rounded-xl border border-dashed border-line bg-sunken"
          :style="{ backgroundColor: page }"
        >
          <v-github-icon
            :key="position"
            :url="repoUrl"
            :position="position"
            :bg-color="bg"
            :fill-color="fill"
            @click="
              track('Outbound Click', { target: 'github', source: 'preview' })
            "
          />
          <p
            class="absolute inset-x-0 bottom-3 text-center font-mono text-xs"
            :style="{ color: fill }"
          >
            hover the corner
          </p>
        </div>

        <div class="mt-5 grid grid-cols-3 gap-3">
          <label
            v-for="field in colorFields"
            :key="field.key"
            class="flex min-w-0 flex-col items-start gap-2 rounded-lg border border-line p-2 text-xs sm:flex-row sm:items-center"
          >
            <input
              type="color"
              class="size-7 shrink-0 cursor-pointer rounded border-0 bg-transparent p-0"
              :value="colors[field.key]"
              :aria-label="field.label"
              @input="onColor(field.key, $event)"
              @change="
                track('Demo Interaction', { action: 'color', field: field.key })
              "
            />
            <span class="min-w-0">
              <span class="block text-muted">{{ field.label }}</span>
              <span class="block truncate font-mono">{{
                colors[field.key]
              }}</span>
            </span>
          </label>
        </div>

        <div class="mt-5 rounded-lg border border-line bg-sunken">
          <div
            class="flex items-center justify-between border-b border-line px-3 py-2"
          >
            <span class="font-mono text-xs text-muted">App.vue</span>
            <button type="button" :class="ghostButton" @click="copySnippet">
              {{ copied === 'snippet' ? 'Copied' : 'Copy' }}
            </button>
          </div>
          <pre
            class="overflow-x-auto p-3 font-mono text-xs leading-relaxed"
          ><code>{{ snippet }}</code></pre>
        </div>
      </section>
    </main>

    <footer
      class="mx-auto w-full max-w-6xl border-t border-line px-5 py-6 text-sm text-muted sm:px-8"
    >
      MIT ·
      <a
        href="https://vinayakkulkarni.dev"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-ink"
        >Vinayak Kulkarni</a
      >
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive, ref } from 'vue';
  import { VGithubIcon } from 'v-github-icon';
  import { version } from '../../package.json';
  import { track } from './analytics';
  import { useTheme } from './composables/use-theme';

  type Position = 'top-left' | 'top-right';
  type ColorKey = 'bg' | 'fill' | 'page';

  const repoUrl = 'https://github.com/vinayakkulkarni/v-github-icon';
  const installCommand = 'pnpm add v-github-icon';

  const navLink =
    'rounded-md px-3 py-1.5 text-muted transition-colors hover:bg-sunken hover:text-ink';
  const primaryButton =
    'shrink-0 cursor-pointer rounded-md bg-signal px-3 py-1.5 text-sm font-bold text-signal-ink transition-opacity hover:opacity-85';
  const ghostButton =
    'cursor-pointer rounded px-2 py-0.5 text-xs text-muted transition-colors hover:bg-surface hover:text-ink';
  const segmentClass = (active: boolean) =>
    active
      ? 'cursor-pointer rounded px-2.5 py-1 font-mono bg-signal text-signal-ink'
      : 'cursor-pointer rounded px-2.5 py-1 font-mono text-muted hover:text-ink';

  const cornerLight = { bg: '#f7f7f5', fill: '#18181b' };
  const cornerDark = { bg: '#18181b', fill: '#f1f1ee' };

  const { isDark, setPreference } = useTheme();
  const toggleTheme = () => {
    const next = isDark.value ? 'light' : 'dark';
    setPreference(next);
    track('Theme Toggle', { mode: next });
  };

  const positions: Position[] = ['top-left', 'top-right'];
  const position = ref<Position>('top-right');
  const setPosition = (next: Position) => {
    position.value = next;
    track('Demo Interaction', { action: 'position', value: next });
  };

  const colorFields: { key: ColorKey; label: string }[] = [
    { key: 'bg', label: 'octocat' },
    { key: 'fill', label: 'ribbon' },
    { key: 'page', label: 'page' },
  ];
  const colors = reactive<Record<ColorKey, string>>({
    bg: '#ffffff',
    fill: '#e8590c',
    page: '#fff4e6',
  });
  const bg = computed(() => colors.bg);
  const fill = computed(() => colors.fill);
  const page = computed(() => colors.page);
  const onColor = (key: ColorKey, event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      colors[key] = event.target.value;
    }
  };

  const snippet = computed(
    () => `<v-github-icon
  url="${repoUrl}"
  position="${position.value}"
  bg-color="${colors.bg}"
  fill-color="${colors.fill}"
/>`,
  );

  const copied = ref<'install' | 'snippet' | null>(null);
  const flashCopied = (which: 'install' | 'snippet') => {
    copied.value = which;
    setTimeout(() => {
      copied.value = null;
    }, 1600);
  };
  const copyInstall = async () => {
    await navigator.clipboard.writeText(installCommand);
    flashCopied('install');
    track('Install Copy', { command: installCommand });
  };
  const copySnippet = async () => {
    await navigator.clipboard.writeText(snippet.value);
    flashCopied('snippet');
    track('Demo Interaction', { action: 'copy-snippet' });
  };
</script>
