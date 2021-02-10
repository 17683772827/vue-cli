import { mapGetters, mapActions } from 'vuex'
export const baseMixins = {
  computed: {
    ...mapGetters(['history'])
  },
  methods: {
    ...mapActions(['setHistory'])
  }
}
