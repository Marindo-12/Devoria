import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CreateCommunity() {
  const { t } = useTranslation();

  return (
    <div id="page-create" className="page">
      <div className="mb-14 flex justify-center items-center">
        <div className="text-purple-600 rounded-full p-3 bg-purple-100 w-fit">
          <Sparkles size={28} />
        </div>
      </div>

      <div>
        <p className="font-bold text-3xl text-center mb-2">
          {t("createCommunity.title")}
        </p>

        <p className="text-gray-500 text-center">
          {t("createCommunity.subtitle")}
        </p>
      </div>

      <div className="community-card bg-gray-100 dark:bg-white/5 mt-9 p-4 rounded-xl">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (window.createCommunity)
              window.createCommunity(event.nativeEvent);
          }}
          className="flex form-cc flex-col gap-4"
        >
          <div>
            <p className="font-semibold text-2xl">
              {t("createCommunity.detailsTitle")}
            </p>

            <p className="text-gray-500 text-sm">
              {t("createCommunity.detailsSubtitle")}
            </p>
          </div>

          <div>
            <label className="form-label text-sm font-medium">
              {t("createCommunity.nameLabel")}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={t("createCommunity.namePlaceholder")}
              id="create-name"
              required
            />
          </div>

          <div>
            <label className="form-label text-sm font-medium">
              {t("createCommunity.descriptionLabel")}
            </label>
            <textarea
              className="form-control"
              id="create-description"
              placeholder={t("createCommunity.descriptionPlaceholder")}
              rows={4}
              required
            />
          </div>

          <div>
            <label className="form-label text-sm font-medium">
              {t("createCommunity.tagsLabel")}
            </label>
            <input
              type="text"
              className="form-control"
              id="create-tags"
              placeholder={t("createCommunity.tagsPlaceholder")}
            />
          </div>

          <div>
            <label className="form-label text-sm font-medium">
              {t("createCommunity.privacyLabel")}
            </label>

            <select
              className="form-control"
              id="create-privacy"
              onChange={() => window.toggleAccessCode()}
            >
              <option value="public">
                {t("createCommunity.privacyPublic")}
              </option>
              <option value="private">
                {t("createCommunity.privacyPrivate")}
              </option>
            </select>
          </div>

          <div id="access-code-field" style={{ display: "none" }}>
            <label className="form-label text-sm font-medium">
              {t("createCommunity.accessCodeLabel")}
            </label>

            <input
              type="text"
              className="form-control"
              id="create-access-code"
            />

            <small className="text-muted">
              {t("createCommunity.accessCodeHelper")}
            </small>
          </div>

          <div>
            <label className="form-label text-sm font-medium">
              {t("createCommunity.coverImageLabel")}
            </label>

            <input
              type="file"
              className="form-control py-4"
              accept="image/*"
              onChange={(e) => window.previewImage(e.nativeEvent)}
            />

            <div className="text-center mt-2">
              <small className="text-lg dark:text-gray-300">
                {t("createCommunity.or")}
              </small>
            </div>

            <input
              type="text"
              className="form-control mt-2"
              id="create-image-url"
              placeholder={t("createCommunity.imageUrlPlaceholder")}
            />

            <div id="image-preview" className="mt-3 hidden">
              <img
                id="preview-img"
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>

          <div className="flex gap-2 mt-10">
            <button
              className="w-full dark:text-gray-700 border rounded-lg p-2 bg-gray-50 dark:bg-white/10 text-sm hover:bg-gray-100 dark:hover:bg-white/20"
              onClick={() => window.showPage("list")}
            >
              {t("createCommunity.cancel")}
            </button>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm"
            >
              {t("createCommunity.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
