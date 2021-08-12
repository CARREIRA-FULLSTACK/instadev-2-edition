import Vue from 'vue';

const vm = new Vue({});

export async function listAllPosts(_, params) {
  const { token } = params;

  try {
    const { data } = await vm.$axios.get('/posts', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  } catch (error) {
    vm.$q.notify({
      type: 'negative',
      message: 'Falha ao carregar posts!',
      position: 'top',
      icon: 'warning',
    });
    return false;
  }
}
