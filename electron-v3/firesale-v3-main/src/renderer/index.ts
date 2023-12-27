import { renderMarkdown } from './markdown';
import Elements from './elements';

Elements.MarkdownView.addEventListener('input', async () => {
  const markdown = Elements.MarkdownView.value;
  Elements.ShowFileButton.disabled = false;
  renderMarkdown(markdown);
  const hasChanges = await window .api.checkForUnsavedChanges(markdown);
  Elements.SaveMarkdownButton.disabled = !hasChanges
});

Elements.OpenFileButton.addEventListener('click', () => {
  Elements.ShowFileButton.disabled = false;
  Elements.OpenInDefaultApplicationButton.disabled = false;
  window.api.showOpenDialog();
})

Elements.ExportHtmlButton.addEventListener('click', () => {
  const html = Elements.RenderedView.innerHTML;
  window.api.showExportHtmlDialog(html);
})

Elements.SaveMarkdownButton.addEventListener('click', async () => {
  const markdown = Elements.MarkdownView.value;
  window.api.saveFile(markdown);
})

Elements.ShowFileButton.addEventListener('click', () => {
  window.api.showInFolder();
})

Elements.OpenInDefaultApplicationButton.addEventListener('click', () => {
  window.api.openInDefaultApplication();
})