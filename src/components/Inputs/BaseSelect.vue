<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <select
      class="form-control"
      :class="{
        'is-valid': validator && !validator.$error && validator.$dirty,
        'is-invalid': validator && validator.$error
      }"
      @change="$emit('input', $event.target.value)"
    >
      <option
        v-for="opt in options"
        :key="opt.id"
        :value="opt.id"
        :selected="value === opt.id"
      >
        {{ opt.name || 'No label' }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
    name: 'base-select',
    props: {
        label: {
        type: String,
        required: true
        },
        options: {
        type: Array,
        required: true,
        validator (opts) {
            return !opts.find(opt => typeof opt !== 'object')
        }
        },
        value: {
        type: String,
        required: true
        },
        validator: {
        type: Object,
        required: false,
        validator ($v) {
            return $v.hasOwnProperty('$model')
        }
        }
    }
}
</script>