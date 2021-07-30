<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <nuxt-link class="navbar-brand" to="/" style="margin-left: 13px;">Nuxt App</nuxt-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/users">Users</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/posts">Posts</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
