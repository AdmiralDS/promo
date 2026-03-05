<script lang="ts">
  import { Button } from '$shared/ui';
  import Analyst from './assets/analyst.svg?component';
  import Designer from './assets/designer.svg?component';
  import Developer from './assets/developer.svg?component';

  const handleClickEmail = () => window.open('mailto:Admiral@inno.tech');
</script>

<div class="footer-container background--Main_White">
  <div class="main-container">
    <div class="info-box">
      <div class="text-box">
        <div class="text first-row text--Dark_Blue">Начните создавать</div>
        <div class="text second-row text--Text_Blue">с Адмиралом</div>
        <div class="text third-row text--Snow_Gray">Свяжитесь с нами и узнайте больше</div>
        <div class="text third-row text--Snow_Gray">о возможностях работы с нашей дизайн-системой</div>
      </div>
      <Button onclick={handleClickEmail}>Связаться с нами</Button>
    </div>
    <div class="copyright-box text--Snow_Gray">
      <div>© Группа компаний «Иннотех», 2020-2025</div>
      <div>Адмирал</div>
    </div>
  </div>
  <div class="bubble-analyst">
    <Analyst />
  </div>
  <div class="bubble-developer">
    <Developer />
  </div>
  <div class="bubble-designer">
    <Designer />
  </div>
</div>

<style lang="scss">
  @use 'styles';
</style>
