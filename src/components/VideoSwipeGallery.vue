<template>
  <pre>video_swipe_gallery: swipe to switch between campaign video</pre>
  <img
    class="rounded shadow"
    src="https://via.placeholder.com/400x300?text=video_placeholder"
    alt="video-preview"
    style="
      aspect-ratio: 16/9;
      object-fit: cover;
      width: 100%;
      object-position: center;
      height: 100%;
    "
  />
  <img
    class="rounded shadow"
    src="https://via.placeholder.com/400x300?text=video_placeholder"
    alt="video-preview"
    style="
      aspect-ratio: 16/9;
      object-fit: cover;
      width: 100%;
      object-position: center;
      height: 100%;
      position: absolute;
      left: 0;
      transform: translate(-1.5rem, -1.5rem);
    "
  />
</template>

<style lang="scss" scoped>
pre {
  color: red;
}
</style>